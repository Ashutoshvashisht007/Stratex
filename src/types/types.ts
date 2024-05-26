export type MoviesData = {
    id: number;
    movie: string;
    rating: number;
    image: string;
    imdb_url: string;
}

export type MoviesProps = {
    movies: MoviesData[];
}