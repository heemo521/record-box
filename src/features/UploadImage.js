import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function UploadImage() {
  const [source, setSource] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source && (
            <Box display="flex" justifyContent="center" border={1}>
              <img src={source} alt={"snap"}></img>
            </Box>
          )}
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
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
      </Grid>
    </div>
  );
}
export default UploadImage;
