import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataMoveiExternal = createAsyncThunk(
  "catch external",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/external_ids`,
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

export const getDataMoveiKeyWords = createAsyncThunk(
  "catch Keywords",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGJhNjczMjRmMDk4Y2NlMWJkOGZkNmJjNmQ3MzUyZiIsInN1YiI6IjY1YzI5YTFhOGUyZTAwMDE4M2E0ZWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey3zKy0IXKuluJIKI0ggzQvrg8u1CHnMSpATKdvMd2w"
        }
      });
      return getData.data.keywords;
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

const userDataMoveiExternal = createSlice({
  name: "data External",
  initialState: data,
  extraReducers: (builder) => {
    // External Movei
    builder.addCase(getDataMoveiExternal.pending, (state) => {
      state.LoadingExternal = true;
    });
    builder.addCase(getDataMoveiExternal.fulfilled, (state, action) => {
      state.LoadingExternal = false;
      state.userExternal = action.payload;
    });
    builder.addCase(getDataMoveiExternal.rejected, (state, action) => {
      state.LoadingExternal = false;
      state.erorExternal = action.payload.message;
    });
    // Keywords Movei
    builder.addCase(getDataMoveiKeyWords.pending, (state) => {
      state.LoadingKeywords = true;
    });
    builder.addCase(getDataMoveiKeyWords.fulfilled, (state, action) => {
      state.LoadingKeywords = false;
      state.userKeywords = action.payload;
    });
    builder.addCase(getDataMoveiKeyWords.rejected, (state, action) => {
      state.LoadingKeywords = false;
      state.erorKeywords = action.payload.message;
    });
  }
});

export const backDataExternalMovei = userDataMoveiExternal.reducer;
