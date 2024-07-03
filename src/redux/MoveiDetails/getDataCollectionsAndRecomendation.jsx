import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataMoveiCollections = createAsyncThunk(
  "catch collection ",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/collection/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGJhNjczMjRmMDk4Y2NlMWJkOGZkNmJjNmQ3MzUyZiIsInN1YiI6IjY1YzI5YTFhOGUyZTAwMDE4M2E0ZWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey3zKy0IXKuluJIKI0ggzQvrg8u1CHnMSpATKdvMd2w"
        }
      });
      return getData.data;
    } catch (eror) {
      return rejectWithValue(eror.message);
    }
  }
);

export const getDataMoveiRecommendations = createAsyncThunk(
  "catch recommendtaions",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/recommendations`,
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
  LoadingCollections: true,
  userCollections: null,
  erorCollections: null,
  LoadingRecommendations: true,
  userRecommendations: [],
  erorRecommendations: null
};

const userDataMoveiCollections = createSlice({
  name: "data collection",
  initialState: data,
  extraReducers: (builder) => {
    // Collection Movei
    builder.addCase(getDataMoveiCollections.pending, (state) => {
      state.LoadingCollections = true;
    });
    builder.addCase(getDataMoveiCollections.fulfilled, (state, action) => {
      state.LoadingCollections = false;
      state.userCollections = action.payload;
    });
    builder.addCase(getDataMoveiCollections.rejected, (state, action) => {
      state.LoadingCollections = false;
      state.erorCollections = action.payload.message;
    });

    // Recommendation Movei
    builder.addCase(getDataMoveiRecommendations.pending, (state) => {
      state.LoadingRecommendations = true;
    });
    builder.addCase(getDataMoveiRecommendations.fulfilled, (state, action) => {
      state.LoadingRecommendations = false;
      state.userRecommendations = action.payload;
    });
    builder.addCase(getDataMoveiRecommendations.rejected, (state, action) => {
      state.LoadingRecommendations = false;
      state.erorRecommendations = action.payload.message;
    });
  }
});

export const backDataCollectionMovei = userDataMoveiCollections.reducer;
