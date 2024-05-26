import { useEffect, useState } from "react";
import "./home.css"
import Movies from "../../components/movies/Movies";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMovies } from "../../redux/slice/movie";

const Home = () => {

    const dispatch = useAppDispatch();
    const { data: movies, isLoading } = useAppSelector((state) => state.movie);
    
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [isHome,setIsHome] = useState<boolean>(true)
    // const [movies,setMovies] = useState<MoviesData[]>([]);

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
        button === "Home" ? setIsHome(true) : setIsHome(false);
    };

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch])
    

    return isLoading ? <h1>Loading....</h1> : (
        <div className="home">
            <span className="homeTitle">BOX OFFICE</span>
            <div className="homeBtns">
                <button className={`homeBtns1 ${activeButton === "Home" ? "active" : ""}`}
          onClick={() => handleButtonClick("Home")}>Home</button>
                <button className={`homeBtns2 ${activeButton === "Starred" ? "active" : ""}`}
          onClick={() => handleButtonClick("Starred")}>Starred</button>
            </div>
            <div className="homeMovies">
                {
                    isHome === true ? 
                        < Movies movies={movies || []}/>
                    : <span>Starred</span>
                }
            </div>
        </div>
    )
}

export default Home