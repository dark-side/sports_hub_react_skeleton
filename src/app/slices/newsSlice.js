import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3002/articles';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await axios.get(SERVER_URL)
    return response.data
})

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: []
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.news = action.payload
            })
    }
});

export const { getNews } = newsSlice.actions;

export default newsSlice.reducer

