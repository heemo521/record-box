/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ax from "axios";
import { Grid, Box, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageDisplay from "./ImageDisplay";

function UploadImage({ setAlbumName }) {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    if (!image) return;
    const uploadImage = () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "soundImage");
      data.append("cloud_name", "djftxayyc");
      fetch("https://api.cloudinary.com/v1_1/djftxayyc/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUrl(data.url);
          console.log(data.url);
        })
        .catch((err) => console.log(err));
    };
    uploadImage();
  }, [image]);

  useEffect(() => {
    if (url === "") return;
    const postImage = () => {
      const regex = /\/([a-zA-Z0-9]*)\.(jpg|png|gif)/;
      const img_id = url.match(regex)[1];

      ax.post("http://localhost:8000/api/album/gva", {
        img_id,
        url,
      })
        .then((res) => {
          console.log(res.data);
          setAlbumData(res.data);
          setAlbumName(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    postImage();
  }, [url]);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label htmlFor="icon-button-file">
            <Button
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <CameraAltIcon />
            </Button>
          </label>
        </Grid>
        <div>
          <p>Album Best Guess: {albumData}</p>
          {url && <ImageDisplay url={url} />}
        </div>
      </Grid>
    </div>
  );
}
export default UploadImage;
