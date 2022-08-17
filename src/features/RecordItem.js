import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function RecordItem(props) {
  return (
    <Typography varaint="p" component="li" color="white">
      props.recordName
    </Typography>
  );
}
