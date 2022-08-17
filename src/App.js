import React, { useState } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";
import Login from "./features/Login";
import SearchSpotify from "./features/SearchSpotify";

import BottomTab from "./features/BottomTab";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
// import SpotifyWebApi from "spotify-web-api-node";
import { SpotifyApi } from "./features/SpotifyApi";
import useAuth from "./features/hoooks/useAuth";

export const code = new URLSearchParams(window.location.search).get("code");

const MainComponent = ({ code }) => {
  const [records, setRecords] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const accessToken = useAuth(code);
  // const SpotifyApi = new SpotifyWebApi({
  //   clientId: "e5c7befa7a5b4f209ae1986b51868db3",
  // });

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Routes>
          <Route
            path="/"
            element={
              <RecordCollection records={records} accessToken={accessToken} />
            }
          />
          <Route
            path="/home"
            element={
              <RecordCollection records={records} accessToken={accessToken} />
            }
          />
          <Route
            path="/image"
            element={
              <UploadImage
                setAlbumName={setAlbumName}
                accessToken={accessToken}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchSpotify
                albumName={albumName}
                setAlbumName={setAlbumName}
                SpotifyApi={SpotifyApi}
                accessToken={accessToken}
              />
            }
          />
        </Routes>
      </Box>
      <BottomTab />
    </>
  );
};

function App() {
  return (
    <Container sx={AppStyles}>
      {code ? <MainComponent code={code} /> : <Login />}
    </Container>
  );
}

const AppStyles = {
  position: "relative",
  width: "100%",
  margin: "0 auto",
  height: "100vh",
};

export default App;
