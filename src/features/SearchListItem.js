import React from "react";
import PropTypes from "prop-types";

function SearchListItem({ album, selectAlbum }) {
  const handleMusicPlay = () => {
    selectAlbum(album);
  };
  return (
    <div style={{ display: "flex" }}>
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
