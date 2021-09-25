import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/movies-api";
import MovieList from "../MovieList/MovieList";
import styles from "./TrendingMovies.module.css";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return <div>{movies && <MovieList movies={movies} />}</div>;
}

export default TrendingMovies;
