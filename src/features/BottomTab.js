import React from "react";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { setTab } from "./app/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export default function BottomTab() {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.main.tab);
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
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
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/image"
            label="Record Player"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/search"
            label="Search"
            icon={<ArchiveIcon />}
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
