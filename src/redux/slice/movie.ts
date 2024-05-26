import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MoviesData } from "../../types/types";

interface MovieState {
    isLoading: boolean;
    data: MoviesData[] | null;
    error: string | null;
}

const initialState: MovieState = {
    isLoading: false,
    data: null,
    error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const APILink = import.meta.env.VITE_API_LINK;
    const res = await fetch(APILink!);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const moviesData: MoviesData[] = await res.json();
    const sortedData = moviesData.sort((a, b) => b.rating - a.rating);
    return sortedData;
});

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MoviesData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch movies';
            });
    },
});

export default movieSlice.reducer;
