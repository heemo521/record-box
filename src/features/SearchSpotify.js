import React, { useState, useEffect } from "react";
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import SearchListItem from "./SearchListItem";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./app/mainSlice";
import { Controller, useForm } from "react-hook-form";

const spotifyApi = new SpotifyWebApi({
  clientId: "e5c7befa7a5b4f209ae1986b51868db3",
});

function SearchSpotify({ code, albumName }) {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => console.log(data);
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      dispatch(setToken(accessToken));
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!albumName) return;
    setSearch(albumName);
  }, [albumName]);

  useEffect(() => {
    if (!accessToken) return;
    let cancel = false;
    spotifyApi
      .searchTracks(search)
      .then((res) => {
        if (cancel) return;
        setSearchResults(
          res.body.tracks.items.map((track) => {
            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: track.album.images[1].url,
            };
          })
        );
      })
      .catch((err) => console.log(err));
    return () => {
      cancel = true;
    };
  }, [accessToken, search]);
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "1rem",
            margin: "1rem 0",
          }}
        >
          <Controller
            name={"textValue"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                label={"Text Value"}
                sx={{ flex: 1 }}
              />
            )}
          />
          <Button onClick={() => setSearch("")} variant={"outlined"}>
            Reset
          </Button>
        </Box>
      </form>

      <div>
        {searchResults.map((album) => (
          <SearchListItem key={album.uri} album={album} />
        ))}
      </div>
    </Box>
    // );
    //   return (
    //     <>
    //       <div className="container">
    //         <div
    //           className="main-wrapper"
    //           style={{ display: "flex", gap: "0.5rem" }}
    //         >
    //           <form>
    //             <label>
    //               Search:
    //               <input
    //                 type="text"
    //                 onChange={(e) => setSearch(e.target.value)}
    //                 value={search}
    //               />
    //             </label>
    //           </form>
    //           <button onClick={() => setSearch("")}>Clear</button>
    //         </div>
    //
    //       </div>
    //     </>
  );
}

export default SearchSpotify;
