import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "./app/mainSlice";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LoadingSpinner from "./UI/LoadingSpinner";

export default function ImageDisplay({
  albumData,
  setImage,
  image,
  url,
  setUrl,
  setAlbumData,
}) {
  const dispatch = useDispatch();
  // const image = useSelector((state) => state.main.image);

  const addToCollection = (userId) => {
    axios.post(`/api/records/${userId}`);
  };

  const handleClear = () => {
    setImage("");
    setUrl("");
    setAlbumData(null);
  };

  return (
    <Card sx={{ maxWidth: 300, outline: "white solid 2px" }}>
      <CardActionArea>
        {/* {!url && image && (
          <Box sx={{ height: 300, width: 300 }}>
            <LoadingSpinner />
          </Box>
        )} */}
        {url ? (
          <CardMedia
            component="img"
            width="300px"
            height="300px"
            image={url || ""}
            alt={url ? "album image" : "Make a search"}
            // onClick={addToCollection}
            // disabled={!url}
          />
        ) : (
          <Box
            component=""
            width="300px"
            height="300px"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            alt={"Make a search"}
          >
            {!image ? (
              <label htmlFor="icon-button-file">
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                  capture="environment"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Button
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <CameraAltIcon />
                </Button>
              </label>
            ) : (
              <LoadingSpinner />
            )}
          </Box>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {albumData ? "Best Guess" : image ? "Searching..." : "Best Guess"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {albumData
              ? albumData?.toUpperCase()
              : image
              ? "..."
              : "Artist & Album"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={addToCollection}
          disabled={!image}
        >
          Add to Collection
        </Button>
        <Button sx={{ color: "white" }} onClick={handleClear} disabled={!image}>
          Clear
        </Button>
      </CardActions>
    </Card>
  );
}

// import React from "react";
// import axios from "axios";

// export default function ImageDisplay({ url }) {
//

//   return (
//     <>
//       <img src={url} alt="music album" width="200" onClick={addToCollection} />
//     </>
//   );
// }
