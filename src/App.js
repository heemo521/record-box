import React, { useState, useEffect } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";
import Login from "./features/Login";
import RecordPlayer from "./features/RecordPlayer";

const MainComponent = ({ records, token }) => {
  return (
    <>
      <UploadImage />
      <RecordCollection records={records} />
      <RecordPlayer token={token} />
    </>
  );
};

function App() {
  const [records, setRecords] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) return;

    async function getToken() {
      const response = await fetch("http://127.0.0.1:8000/auth/token");
      const json = await response.json();
      console.log(json.access_token);
      setToken(json.access_token);
    }
    getToken();
  }, []);

  return (
    <div className="App">
      {!token ? (
        <Login />
      ) : (
        <MainComponent records={records} setRecords={setRecords} />
      )}
    </div>
  );
}

export default App;
