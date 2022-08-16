import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  album: "",
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
  },
});

export const { setToken, selectAlbum } = mainSlice.actions;
export default mainSlice.reducer;
