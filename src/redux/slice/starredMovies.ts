import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviesData } from "../../types/types";

interface StarredMoviesState {
    starredMovies: MoviesData[];
}

const initialState: StarredMoviesState = {
    starredMovies: [],
};

const starredSlice = createSlice({
    name: "starreeMovies",
    initialState,
    reducers: {
        addStarredMovie(state, action: PayloadAction<MoviesData>) {
            const movieExists = state.starredMovies.some(movie => movie.id === action.payload.id);
            if (!movieExists) {
                state.starredMovies.push(action.payload);
            }
        },
        removeStarredMovie(state, action: PayloadAction<number>) {
            state.starredMovies = state.starredMovies.filter(
                (movie) => movie.id !== action.payload
            );
        },
    }

});

export const { addStarredMovie, removeStarredMovie } = starredSlice.actions;
export default starredSlice.reducer;