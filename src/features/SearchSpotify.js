import React, { useState, useEffect } from "react";
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import SearchListItem from "./SearchListItem";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./app/mainSlice";

const spotifyApi = new SpotifyWebApi({
  clientId: "e5c7befa7a5b4f209ae1986b51868db3",
});

function SearchSpotify({ code, albumName }) {
  const dispatch = useDispatch();
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
    <>
      <div className="container">
        <div
          className="main-wrapper"
          style={{ display: "flex", gap: "0.5rem" }}
        >
          <form>
            <label>
              Search:
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </label>
          </form>
          <button onClick={() => setSearch("")}>Clear</button>
        </div>
        <div>
          {searchResults.map((album) => (
            <SearchListItem key={album.uri} album={album} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchSpotify;
