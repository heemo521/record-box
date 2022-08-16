import React from "react";
import PropTypes from "prop-types";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";

function MusicPlayer() {
  const token = useSelector((state) => state.main.token);
  const album = useSelector((state) => state.main.album);

  if (!token) return null;

  console.log(album);
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      play={true}
      uris={album ? [album.uri] : []}
    />
  );
}

MusicPlayer.propTypes = {};

export default MusicPlayer;
