import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector, useDispatch } from "react-redux";
import { setPlay } from "./app/mainSlice";

function MusicPlayer() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.main.token);
  const album = useSelector((state) => state.main.album);
  const play = useSelector((state) => state.main.play);

  useEffect(() => {
    setPlay(true);
  }, [album]);

  if (!token) return null;

  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={(state) => {
        if (!play) dispatch(setPlay(false));
      }}
      play={true}
      uris={album ? [album.uri] : []}
    />
  );
}

MusicPlayer.propTypes = {};

export default MusicPlayer;
