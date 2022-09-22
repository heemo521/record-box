import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const mainSlice = createSlice({
  name: 'main',
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
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setToken, selectAlbum, setPlay, setTab, setImage, setUrl } =
  mainSlice.actions;
export default mainSlice.reducer;
