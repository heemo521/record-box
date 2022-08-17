import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Spinner = styled(Box)({
  width: "50px",
  height: "50px",
  border: "10px solid #f3f3f3",
  "border-top": "10px solid #383636",
  "border-radius": "50%",
  animation: "spinner 1.5s linear infinite",
  "@keyframes spinner": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

export default function LoadingSpinner() {
  return (
    <Box>
      <Spinner />
    </Box>
  );
}
