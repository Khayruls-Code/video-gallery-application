import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await fetchVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(loadVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(loadVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;
