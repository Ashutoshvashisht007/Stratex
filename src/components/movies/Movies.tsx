import { useEffect, useState } from "react";
import { MoviesData, MoviesProps } from "../../types/types"
import "./movies.css"
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from "react-redux";
import { addStarredMovie, removeStarredMovie } from "../../redux/slice/starredMovies";
import { RootState } from "../../redux/store";



const Movies: React.FC<MoviesProps> = ({ movies }) => {

  const dispatch = useDispatch();
  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});
  const starredMovies = useSelector((state: RootState) => state.starredMovies.starredMovies);

  useEffect(() => {
    const initialClickedState = movies.reduce((acc, movie) => {
      acc[movie.id] = starredMovies.some(starredMovie => starredMovie.id === movie.id);
      return acc;
    }, {} as Record<string, boolean>);
    setClicked(initialClickedState);
  }, [movies, starredMovies]);

  const handleStarClick = (movie: MoviesData) => {
    if (clicked[movie.id]) {
      dispatch(removeStarredMovie(movie.id));
    }
    else {
      dispatch(addStarredMovie(movie));
    }
    setClicked((prevClicked) => ({
      ...prevClicked,
      [movie.id]: !prevClicked[movie.id],
    }));


  };

  const getRatingColor = (rating: number): string => {
    if (rating >= 8.0) return '#4CAF50';
    if (rating >= 6.0) return '#FFEB3B';
    if (rating >= 4.0) return '#FF9800';
    return '#F44336';
  };

  return movies.length > 0 ? (
    <div className="movies">
      {
        movies.map((movie) => (
          <div className="moviesContainer" key={movie.id}>
            <div className="moviesContainerImage">
              <img className="moviesContainerImageImg" src={movie.image} alt={movie.movie} />
            </div>
            <div className="moviesContainerFor">
              <span className="moviesContainerTitle">{movie.movie}</span>
            </div>
            <div className="moviesContainerDesc">
              <span className="moviesContainerDescRatings"
                style={{ color: getRatingColor(movie.rating) }}>{movie.rating}</span>
              <a className="moviesContainerDescIMDB" href={movie.imdb_url} target="#" >IMDB</a>
              <button
                className="moviesContainerDescBtn"
                style={{ color: clicked[movie.id] ? "rgb(255, 200, 6)" : "rgb(100, 76, 76)" }}
                onClick={() => handleStarClick(movie)}
              >
                < StarIcon className="moviesStar" />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  ) : <h1>No Movies Found</h1>
}

export default Movies