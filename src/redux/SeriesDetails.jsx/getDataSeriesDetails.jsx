import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataSeriesDetails = createAsyncThunk(
  "catch details",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}`,
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

export const getDataTrailerSeries = createAsyncThunk(
  "catch Trailer",
  async (id = 1, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/videos`,
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

export const getDataSeriesPeople = createAsyncThunk(
  "catch people",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/credits`,
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

const data = {
  LoadingDetails: true,
  LoadingPeople: true,
  LoadingTrailer: true,

  userDetails: null,
  userPeople: null,
  userTrailer: [],

  erorDetails: null,
  erorPeople: null,
  erorTrailer: null
};

const userDataSeriesDetails = createSlice({
  name: "data Series Details",
  initialState: data,
  extraReducers: (builder) => {
    // Series Details
    builder.addCase(getDataSeriesDetails.pending, (state) => {
      state.LoadingDetails = true;
    });
    builder.addCase(getDataSeriesDetails.fulfilled, (state, action) => {
      state.LoadingDetails = false;
      state.userDetails = action.payload;
    });
    builder.addCase(getDataSeriesDetails.rejected, (state, action) => {
      state.LoadingDetails = false;
      state.erorDetails = action.payload.message;
    });
    // Series People
    builder.addCase(getDataSeriesPeople.pending, (state) => {
      state.LoadingPeople = true;
    });
    builder.addCase(getDataSeriesPeople.fulfilled, (state, action) => {
      state.LoadingPeople = false;
      state.userPeople = action.payload;
    });
    builder.addCase(getDataSeriesPeople.rejected, (state, action) => {
      state.LoadingPeople = false;
      state.erorPeople = action.payload.message;
    });

    // Trailer Series
    builder.addCase(getDataTrailerSeries.pending, (state) => {
      state.LoadingTrailer = true;
    });
    builder.addCase(getDataTrailerSeries.fulfilled, (state, action) => {
      state.LoadingTrailer = false;
      state.userTrailer = action.payload;
    });
    builder.addCase(getDataTrailerSeries.rejected, (state, action) => {
      state.LoadingTrailer = false;
      state.erorTrailer = action.payload.message;
    });
  }
});

export const backDataSeriesDetails = userDataSeriesDetails.reducer;
