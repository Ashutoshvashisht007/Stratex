import { useState } from "react";
import { MoviesProps } from "../../types/types"
import "./movies.css"
import StarIcon from '@mui/icons-material/Star';



const Movies: React.FC<MoviesProps> = ({ movies }) => {

  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});

  const handleButtonClick = (id: number) => {
    setClicked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getRatingColor = (rating: number): string => {
    if (rating >= 8.0) return '#4CAF50'; // Green
    if (rating >= 6.0) return '#FFEB3B'; // Yellow
    if (rating >= 4.0) return '#FF9800'; // Orange
    return '#F44336'; // Red
  };

  return (
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
                onClick={() => handleButtonClick(movie.id)}
              >
                < StarIcon className="moviesStar" />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Movies