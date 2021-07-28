import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movie/movieSlice.js';
import userReducer from './user/userSlice.js';

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        user: userReducer
    }
});