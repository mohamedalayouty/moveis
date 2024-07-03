import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataSeriesRecommendations = createAsyncThunk(
  "catch recommendtaions",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/recommendations`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGJhNjczMjRmMDk4Y2NlMWJkOGZkNmJjNmQ3MzUyZiIsInN1YiI6IjY1YzI5YTFhOGUyZTAwMDE4M2E0ZWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey3zKy0IXKuluJIKI0ggzQvrg8u1CHnMSpATKdvMd2w"
        }
      });
      return getData.data.results;
    } catch (eror) {
      return rejectWithValue(eror.message);
    }
  }
);

const data = {
  LoadingRecommendations: true,
  userRecommendations: [],
  erorRecommendations: null
};

const userDataSeriesRecommendation = createSlice({
  name: "data Recommendation",
  initialState: data,
  extraReducers: (builder) => {
    // Recommendation Movei
    builder.addCase(getDataSeriesRecommendations.pending, (state) => {
      state.LoadingRecommendations = true;
    });
    builder.addCase(getDataSeriesRecommendations.fulfilled, (state, action) => {
      state.LoadingRecommendations = false;
      state.userRecommendations = action.payload;
    });
    builder.addCase(getDataSeriesRecommendations.rejected, (state, action) => {
      state.LoadingRecommendations = false;
      state.erorRecommendations = action.payload.message;
    });
  }
});

export const backDataRecommendationSeries =
  userDataSeriesRecommendation.reducer;
