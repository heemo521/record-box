import React from "react";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import { setTab } from "./app/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecordPlayer from "./RecordPlayer";
import { Container } from "@mui/material";

export default function BottomTab() {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.main.tab);
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "rgba(0, 0, 0, 0)",
        }}
        elevation={3}
      >
        <Box sx={{ marginBottom: "12px" }}>
          <RecordPlayer />
        </Box>
        <BottomNavigation
          showLabels
          value={tab}
          onChange={(event, newValue) => {
            dispatch(setTab(newValue));
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/home"
            label="Home"
            icon={<HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/image"
            label="Image Search"
            icon={<AlbumOutlinedIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/search"
            label="Search"
            icon={<SearchOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
  //   return (
  //     <Box
  //       //   position="sticky"
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       height="100vh"
  //       gap="12px"
  //     >
  //       <ButtonGroup variant="contained" color="secondary">
  //         <Link to={"/"}>
  //           <Button>HOME</Button>
  //         </Link>
  //         <Link to={"/image"}>
  //           <Button>ImageSearch</Button>
  //         </Link>
  //         <Link to={"/search"}>
  //           <Button>Search</Button>
  //         </Link>
  //       </ButtonGroup>
  //     </Box>
  //   );
}
