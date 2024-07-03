import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataMoveiDetails = createAsyncThunk(
  "catch details",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
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

export const getDataTrailerVideo = createAsyncThunk(
  "catch Trailer",
  async (id = 1, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/videos`,
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

export const getDataMoveiPeople = createAsyncThunk(
  "catch people",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits`,
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
  userType1: [],
  userType2: [],
  userType3: [],
  userType4: [],
  userType5: [],

  erorDetails: null,
  erorPeople: null,
  erorTrailer: null
};

const userDataMoveiDetails = createSlice({
  name: "data Movie Details",
  initialState: data,
  extraReducers: (builder) => {
    // MoveiDetails
    builder.addCase(getDataMoveiDetails.pending, (state) => {
      state.LoadingDetails = true;
    });
    builder.addCase(getDataMoveiDetails.fulfilled, (state, action) => {
      state.LoadingDetails = false;
      state.userDetails = action.payload;
    });
    builder.addCase(getDataMoveiDetails.rejected, (state, action) => {
      state.LoadingDetails = false;
      state.erorDetails = action.payload.message;
    });
    // MoviePeople
    builder.addCase(getDataMoveiPeople.pending, (state) => {
      state.LoadingPeople = true;
    });
    builder.addCase(getDataMoveiPeople.fulfilled, (state, action) => {
      state.LoadingPeople = false;
      state.userPeople = action.payload;
    });
    builder.addCase(getDataMoveiPeople.rejected, (state, action) => {
      state.LoadingPeople = false;
      state.erorPeople = action.payload.message;
    });

    // Trailer Movie
    builder.addCase(getDataTrailerVideo.pending, (state) => {
      state.LoadingTrailer = true;
    });
    builder.addCase(getDataTrailerVideo.fulfilled, (state, action) => {
      state.LoadingTrailer = false;
      state.userTrailer = action.payload;

      state.userType1 = action.payload.filter(
        (user, index) => user.type === "Clip"
      );
      state.userType2 = action.payload.filter(
        (user, index) => user.type === "Teaser"
      );
      state.userType3 = action.payload.filter(
        (user, index) => user.type === "Featurette"
      );
      state.userType4 = action.payload.filter(
        (user, index) => user.type === "Behind the Scenes"
      );
      state.userType5 = action.payload.filter(
        (user, index) => user.type === "Trailer"
      );
    });
    builder.addCase(getDataTrailerVideo.rejected, (state, action) => {
      state.LoadingTrailer = false;
      state.erorTrailer = action.payload.message;
    });
  }
});

export const backDataMoveiDetails = userDataMoveiDetails.reducer;
