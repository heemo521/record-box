/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ax from "axios";
import { Box, Typography } from "@mui/material";

import ImageDisplay from "./ImageDisplay";
import { useSelector, useDispatch } from "react-redux";
import { setPlay } from "./app/mainSlice";

function UploadImage({ setAlbumName }) {
  const dispatch = useDispatch();
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

      ax.post("http://192.168.0.113:8000/api/album/gva", {
        img_id,
        url,
      })
        .then((res) => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <ImageDisplay
          url={url}
          albumData={albumData}
          setImage={setImage}
          image={image}
          setUrl={setUrl}
          setAlbumData={setAlbumData}
        />
      </div>
    </Box>
  );
}
export default UploadImage;
