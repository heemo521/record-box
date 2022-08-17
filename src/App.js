import React, { useState } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";
import Login from "./features/Login";
import SearchSpotify from "./features/SearchSpotify";

import BottomTab from "./features/BottomTab";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";

const code = new URLSearchParams(window.location.search).get("code");

const MainComponent = ({ code }) => {
  const [records, setRecords] = useState([]);
  const [albumName, setAlbumName] = useState("");
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
          <Route path="/" element={<RecordCollection records={records} />} />
          <Route
            path="/home"
            element={<RecordCollection records={records} />}
          />
          <Route
            path="/image"
            element={<UploadImage setAlbumName={setAlbumName} />}
          />
          <Route
            path="/search"
            element={<SearchSpotify albumName={albumName} code={code} />}
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
