import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  album: "",
  play: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    selectAlbum: (state, action) => {
      state.album = action.payload;
    },
    setPlay: (state, action) => {
      state.play = action.payload;
    },
  },
});

export const { setToken, selectAlbum, setPlay } = mainSlice.actions;
export default mainSlice.reducer;
