import React, { useState, useEffect } from "react";
import RecordItem from "./RecordItem";
import { SpotifyApi } from "./SpotifyApi";
import { Box, Typography } from "@mui/material";

export default function RecordCollection({ records, accessToken }) {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [playlist, setPlaylist] = useState("");

  useEffect(() => {
    SpotifyApi.getMe().then(
      function (data) {
        console.log("Some information about the authenticated user", data.body);
        setUser(data.body.display_name);
        setUserId(data.body.id);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, []);
  useEffect(() => {
    if (!accessToken) return;
    SpotifyApi.getUserPlaylists(user).then(
      function (data) {
        console.log("Retrieved playlists", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken]);

  return (
    <Box>
      <Typography varaint="h3" color="white">
        Hello {user.split(" ")[0]}!
      </Typography>
      {/* <Typography varaint="h5" color="white">
        Playlist
      </Typography> */}
      {/* {records.length === 0 && (
        <Typography varaint="h5" color="white">
          Empty List...
        </Typography>
      )} */}
      <ul>
        {records.map((record) => (
          <RecordItem key={record.id}>{record.title}</RecordItem>
        ))}
      </ul>
    </Box>
  );
}
