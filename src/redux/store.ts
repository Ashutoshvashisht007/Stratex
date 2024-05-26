import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./slice/movie.ts"
import starredMovies from "./slice/starredMovies.ts";

export const store = configureStore({
    reducer:{
        movie: moveReducer,
        starredMovies: starredMovies,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;