import { useState, useEffect } from "react";
import axios from "axios";
import { setToken } from "../app/mainSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useAuth(code) {
  const token = useSelector((state) => state.main.token);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) return;
    axios
      .post("http://192.168.0.113:8000/auth/login", {
        code,
      })
      .then((res) => {
        console.log("login", res.data);
        setAccessToken(res.data.accessToken);
        dispatch(setToken(res.data.accessToken));
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log("login error" + err);
        // window.location = "/";
      });
  }, [code, dispatch, token]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    console.log("refreshToken" + refreshToken);
    const interval = setInterval(() => {
      axios
        .post("http://192.168.0.113:8000/auth/refresh", {
          refreshToken,
        })
        .then((res) => {
          console.log("refresh", res.data);
          setAccessToken(res.data.accessToken);
          dispatch(setToken(res.data.accessToken));
          setExpiresIn(res.data.expiresIn);
        })
        .catch((err) => {
          console.log(err);
          //   window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn, dispatch]);

  return accessToken;
}
