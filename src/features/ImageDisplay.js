import React from "react";
import axios from "axios";

export default function ImageDisplay({ url }) {
  const addToCollection = (userId) => {
    axios.post(`/api/records/${userId}`);
  };

  return (
    <>
      <img src={url} alt="music album" width="200" onClick={addToCollection} />
    </>
  );
}
