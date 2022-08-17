import React from "react";
import PropTypes from "prop-types";
import { Typography, Button, Box } from "@mui/material";
import { selectAlbum } from "./app/mainSlice";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

const Logo = styled(Typography)({
  fontSize: {
    sm: "1.5rem",
    md: "2rem",
  },
  // padding: "1rem",
  // borderRadius: "10px",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    color: "#f3f3f3",
    outline: "1px solid #f3f3f3",
  },
  color: "white",
});
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
      <Box>
        <Logo>{album.title}</Logo>
        <Logo>{album.artist}</Logo>
      </Box>
    </div>
  );
}

export default SearchListItem;
