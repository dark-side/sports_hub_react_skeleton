import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';

export default configureStore({
    reducer: {
        news: newsSlice
    }
})