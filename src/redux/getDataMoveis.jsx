import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNowDataMoveis = createAsyncThunk(
  "catch data movei",
  async (i, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getDataNow = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGJhNjczMjRmMDk4Y2NlMWJkOGZkNmJjNmQ3MzUyZiIsInN1YiI6IjY1YzI5YTFhOGUyZTAwMDE4M2E0ZWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey3zKy0IXKuluJIKI0ggzQvrg8u1CHnMSpATKdvMd2w"
        }
      });
      return getDataNow.data.results;
    } catch (eror) {
      return rejectWithValue(eror.message);
    }
  }
);

export const getDataAllMoveis = createAsyncThunk(
  "catch all",
  async (id = 1, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
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
  TopEror: null,
  AllEror: null
};
const userDataNowMovei = createSlice({
  name: "data moveis",
  initialState: data,
  extraReducers: (builder) => {
    // Now Data and Top Movei
    builder.addCase(getNowDataMoveis.pending, (state) => {
      state.loading = true;
      state.topLoading = true;
    });
    builder.addCase(getNowDataMoveis.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;

      state.topLoading = false;
      state.topUsers = action.payload.filter((user) => user.vote_average > 7);
    });
    builder.addCase(getNowDataMoveis.rejected, (state, action) => {
      state.loading = false;
      state.eror = action.payload.message;

      state.topLoading = false;
      state.TopEror = action.payload.message;
    });

    // All Movei
    builder.addCase(getDataAllMoveis.pending, (state) => {
      state.AllLoading = true;
    });
    builder.addCase(getDataAllMoveis.fulfilled, (state, action) => {
      state.AllLoading = false;
      state.AllUsers = action.payload;
    });
    builder.addCase(getDataAllMoveis.rejected, (state, action) => {
      state.AllLoading = false;
      state.AllEror = action.payload.message;
    });
  }
});

export const backDataMoveisNow = userDataNowMovei.reducer;
