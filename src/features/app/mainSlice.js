import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  album: "",
  play: false,
  tab: 0,
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
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setToken, selectAlbum, setPlay, setTab } = mainSlice.actions;
export default mainSlice.reducer;
