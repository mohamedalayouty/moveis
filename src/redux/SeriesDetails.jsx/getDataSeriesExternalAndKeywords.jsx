import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataSeriesExternalId = createAsyncThunk(
  "catch title Social",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/external_ids`,
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

export const getDataSeriesKeyWords = createAsyncThunk(
  "catch Keywords",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/keywords`,
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
  LoadingExternal: true,
  userExternal: null,
  erorExternal: null,
  LoadingKeywords: true,
  userKeywords: [],
  erorKeywords: null
};

const userDataSeriesExternal = createSlice({
  name: "data external",
  initialState: data,
  extraReducers: (builder) => {
    // External Series
    builder.addCase(getDataSeriesExternalId.pending, (state) => {
      state.LoadingExternal = true;
    });
    builder.addCase(getDataSeriesExternalId.fulfilled, (state, action) => {
      state.LoadingExternal = false;
      state.userExternal = action.payload;
    });
    builder.addCase(getDataSeriesExternalId.rejected, (state, action) => {
      state.LoadingExternal = false;
      state.erorExternal = action.payload.message;
    });
    // Keywords Series
    builder.addCase(getDataSeriesKeyWords.pending, (state) => {
      state.LoadingKeywords = true;
    });
    builder.addCase(getDataSeriesKeyWords.fulfilled, (state, action) => {
      state.LoadingKeywords = false;
      state.userKeywords = action.payload;
    });
    builder.addCase(getDataSeriesKeyWords.rejected, (state, action) => {
      state.LoadingKeywords = false;
      state.erorKeywords = action.payload.message;
    });
  }
});

export const backDataExternalSeries = userDataSeriesExternal.reducer;
