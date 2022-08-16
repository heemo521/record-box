import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    setCount((count) => count + 1);
    axios
      .post("http://localhost:8000/auth/login", {
        code,
      })
      .then((res) => {
        console.log("login", res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log("login error" + err);
        // window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    console.log("refreshToken" + refreshToken);
    const interval = setInterval(() => {
      axios
        .post("http://localhost:8000/auth/refresh", {
          refreshToken,
        })
        .then((res) => {
          console.log("refresh", res.data);
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch((err) => {
          console.log(err);
          //   window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
}
