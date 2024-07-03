import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNowDataSeries = createAsyncThunk(
  "catch data series",
  async (i, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/on_the_air",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGJhNjczMjRmMDk4Y2NlMWJkOGZkNmJjNmQ3MzUyZiIsInN1YiI6IjY1YzI5YTFhOGUyZTAwMDE4M2E0ZWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey3zKy0IXKuluJIKI0ggzQvrg8u1CHnMSpATKdvMd2w"
        }
      });
      return getData.data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getDataAllSeries = createAsyncThunk(
  "catch all",
  async (id = 1, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
        params: { language: "en-US", page: `${id}` },
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
  loading: true,
  topLoading: true,
  AllLoading: true,

  users: [],
  topUsers: [],
  AllUsers: [],

  eror: null,
  topEror: null,
  AllEror: null
};

const userDataNowSereis = createSlice({
  name: "data",
  initialState: data,
  extraReducers: (builder) => {
    // Now Data
    builder.addCase(getNowDataSeries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNowDataSeries.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getNowDataSeries.rejected, (state, action) => {
      state.loading = false;
      state.eror = action.payload.message;
    });

    // All Series and Top Series
    builder.addCase(getDataAllSeries.pending, (state) => {
      state.AllLoading = true;
      state.topLoading = true;
    });
    builder.addCase(getDataAllSeries.fulfilled, (state, action) => {
      state.AllLoading = false;
      state.AllUsers = action.payload;

      state.topLoading = false;
      state.topUsers = action.payload.filter((user) => user.vote_average > 7.8);
    });
    builder.addCase(getDataAllSeries.rejected, (state, action) => {
      state.loading = false;
      state.eror = action.payload.message;

      state.AllLoading = false;
      state.AllEror = action.payload.message;
    });
  }
});

export const backDataSeriesNow = userDataNowSereis.reducer;
