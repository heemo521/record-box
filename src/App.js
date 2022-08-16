import React, { useState, useEffect } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";
import MusicPlayer from "./features/MusicPlayer";
import Login from "./features/Login";
import axios from "axios";
function App() {
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   if (token) return;
  //   async function getToken() {
  //     const response = await axios("http://localhost:5000/auth/token");

  //     const json = response.data;
  //     console.log("something" + JSON.stringify(json));
  //     console.log(token);
  //     // setToken(json.access_token);
  //   }

  //   getToken();
  // }, []);
  useEffect(() => {
    async function getToken() {
      const response = await fetch("http://localhost:5000/auth/token");
      const json = await response.json();
      console.log(json);
      setToken(json.access_token);
    }

    getToken();
  }, []);
  const [records, setRecords] = useState([]);

  return (
    <div className="App">
      <UploadImage />
      <RecordCollection records={records} />
      {!token ? <Login /> : <MusicPlayer />}
    </div>
  );
}

export default App;
