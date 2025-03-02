import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import mockedData from './mockedData.json';

const ARTICLES_URL = `${process.env.REACT_APP_API_URL}/api/articles`;

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return mockedData.news.map((news) => ({
      ...news,
      image_url: require(`./images/${news.id}.jpg`),
    }));
  }
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
