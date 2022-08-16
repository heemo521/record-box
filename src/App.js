import React, { useState, useEffect } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";
import Login from "./features/Login";
import SearchSpotify from "./features/SearchSpotify";
import MusicPlayer from "./features/MusicPlayer";

const code = new URLSearchParams(window.location.search).get("code");

const MainComponent = ({ code }) => {
  const [records, setRecords] = useState([]);
  const [searchedRecord, setSearchedRecord] = useState({});
  const [albumName, setAlbumName] = useState("");
  return (
    <>
      <RecordCollection records={records} />
      <UploadImage setAlbumName={setAlbumName} />
      <SearchSpotify
        albumName={albumName}
        code={code}
        setSearchedRecord={setSearchedRecord}
      />
      <MusicPlayer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      {code ? <MainComponent code={code} /> : <Login />}
    </div>
  );
}

export default App;
