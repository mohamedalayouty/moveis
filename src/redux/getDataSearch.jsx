import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataSearchMovei = createAsyncThunk(
  "catch search movei",
  async (name = "string", thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: `${name}`,
          include_adult: "false",
          language: "en-US",
          page: "1"
        },
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

export const getDataSearchSeries = createAsyncThunk(
  "catch search Series",
  async (name = "string", thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/tv",
        params: {
          query: `${name}`,
          include_adult: "false",
          language: "en-US",
          page: "1"
        },
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
  LoadingSearchMovei: true,
  userSearchMovei: [],
  erorSearchMovei: null,

  LoadingSearchSeries: true,
  userSearchseries: [],
  erorSearchSeries: null
};

const userDataSearch = createSlice({
  name: "data ",
  initialState: data,
  extraReducers: (builder) => {
    // Search Movei
    builder.addCase(getDataSearchMovei.pending, (state) => {
      state.LoadingSearchMovei = true;
    });
    builder.addCase(getDataSearchMovei.fulfilled, (state, action) => {
      state.LoadingSearchMovei = false;
      state.userSearchMovei = action.payload;
    });
    builder.addCase(getDataSearchMovei.rejected, (state, action) => {
      state.LoadingSearchMovei = false;
      state.erorSearchMovei = action.payload.message;
    });
    // Search Series
    builder.addCase(getDataSearchSeries.pending, (state) => {
      state.LoadingSearchSeries = true;
    });
    builder.addCase(getDataSearchSeries.fulfilled, (state, action) => {
      state.LoadingSearchSeries = false;
      state.userSearchseries = action.payload;
    });
    builder.addCase(getDataSearchSeries.rejected, (state, action) => {
      state.LoadingSearchSeries = false;
      state.erorSearchSeries = action.payload.message;
    });
  }
});

export const backDataSearch = userDataSearch.reducer;
