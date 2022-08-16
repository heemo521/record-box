import React from "react";
import PropTypes from "prop-types";

import { selectAlbum } from "./app/mainSlice";
import { useDispatch } from "react-redux";
function SearchListItem({ album }) {
  const dispatch = useDispatch();

  const handleMusicPlay = () => {
    dispatch(selectAlbum(album));
  };
  return (
    <div style={{ display: "flex" }} onClick={handleMusicPlay}>
      <img
        src={album.albumUrl}
        alt={album.title}
        style={{ height: "100px", width: "100px" }}
      />
      <div>
        <div>{album.title}</div>
        <div>{album.artist}</div>
      </div>
    </div>
  );
}

SearchListItem.propTypes = {};

export default SearchListItem;
