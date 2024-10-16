import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ARTICLES_URL = `${process.env.REACT_APP_API_URL}/articles`;

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(ARTICLES_URL);
  return response.data;
});

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export const { getNews } = newsSlice.actions;

export default newsSlice.reducer;
