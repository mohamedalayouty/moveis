import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataSeriesReview = createAsyncThunk(
  "catch Review Series",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/reviews`,
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

export const getDataSeriesBackDrops = createAsyncThunk(
  "catch BackDrops",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const getData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/images`,
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
  LoadingReview: true,
  userReview: null,
  erorReview: null,
  LoadindBackDrops: true,
  userBackDrops: null,
  erorBackDrops: null,
  userlang1: [],
  userlang2: [],
  userlang3: [],
  userlang4: [],
  userlang5: [],

  userlangPosters1: [],
  userlangPosters2: [],
  userlangPosters3: [],
  userlangPosters4: [],
  userlangPosters5: [],
  userlangPosters6: [],
  userlangPosters7: [],
  userlangPosters8: [],
  userlangPosters9: [],
  userlangPosters10: []
};

const userDataSeriesSocial = createSlice({
  name: "data social",
  initialState: data,
  extraReducers: (builder) => {
    // Review Sries
    builder.addCase(getDataSeriesReview.pending, (state) => {
      state.LoadingReview = true;
    });
    builder.addCase(getDataSeriesReview.fulfilled, (state, action) => {
      state.LoadingReview = false;
      state.userReview = action.payload;
    });
    builder.addCase(getDataSeriesReview.rejected, (state, action) => {
      state.LoadingReview = false;
      state.erorReview = action.payload.message;
    });
    // BackDrops Series
    builder.addCase(getDataSeriesBackDrops.pending, (state) => {
      state.LoadindBackDrops = true;
    });
    builder.addCase(getDataSeriesBackDrops.fulfilled, (state, action) => {
      state.LoadindBackDrops = false;
      state.userBackDrops = action.payload;

      state.userlang1 = action.payload.backdrops.filter(
        (user, index) => user.iso_639_1 === null
      );
      state.userlang2 = action.payload.backdrops.filter(
        (user, index) => user.iso_639_1 === "en"
      );
      state.userlang3 = action.payload.backdrops.filter(
        (user, index) => user.iso_639_1 === "fr"
      );
      state.userlang4 = action.payload.backdrops.filter(
        (user, index) => user.iso_639_1 === "it"
      );
      state.userlang5 = action.payload.backdrops.filter(
        (user, index) => user.iso_639_1 === "pt"
      );

      state.userlangPosters1 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === null
      );
      state.userlangPosters2 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "en"
      );
      state.userlangPosters3 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "fr"
      );
      state.userlangPosters4 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "it"
      );
      state.userlangPosters5 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "uk"
      );
      state.userlangPosters6 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "ko"
      );
      state.userlangPosters7 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "zh"
      );
      state.userlangPosters8 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "vi"
      );
      state.userlangPosters9 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "sk"
      );
      state.userlangPosters10 = action.payload.posters.filter(
        (user, index) => user.iso_639_1 === "ru"
      );
    });
    builder.addCase(getDataSeriesBackDrops.rejected, (state, action) => {
      state.LoadindBackDrops = false;
      state.erorBackDrops = action.payload.message;
    });
  }
});

export const backDataSocialSeries = userDataSeriesSocial.reducer;
