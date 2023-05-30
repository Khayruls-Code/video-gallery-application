import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await fetchTags();
  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(loadTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(loadTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
