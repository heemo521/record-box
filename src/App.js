import React, { useState, useEffect } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";
import Login from "./features/Login";
import SearchSpotify from "./features/SearchSpotify";
import MusicPlayer from "./features/MusicPlayer";
import store from "./features/app/store";
import { Provider } from "react-redux";

const code = new URLSearchParams(window.location.search).get("code");

const MainComponent = ({ code }) => {
  const [token, setToken] = useState("");
  const [records, setRecords] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [albumName, setAlbumName] = useState("");
  return (
    <>
      <RecordCollection records={records} />
      <UploadImage setAlbumName={setAlbumName} />
      <SearchSpotify
        albumName={albumName}
        code={code}
        setToken={setToken}
        setSelectedAlbum={setSelectedAlbum}
      />
      <MusicPlayer selectedAlbum={selectedAlbum} token={token} />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {code ? <MainComponent code={code} /> : <Login />}
      </div>
    </Provider>
  );
}

export default App;
