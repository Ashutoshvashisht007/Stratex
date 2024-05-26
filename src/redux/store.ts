import { configureStore } from "@reduxjs/toolkit";
import moveReducer from "./slice/movie.ts"

export const store = configureStore({
    reducer:{
        movie: moveReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;