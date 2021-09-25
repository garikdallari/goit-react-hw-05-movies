import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./Movies.module.css";
import { fetchMovieByName } from "../../services/movies-api";
import MovieList from "../MovieList/MovieList";
import { HiSearch } from "react-icons/hi";

function Movies() {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get("query");
    setValue(queryValue);
  }, [location.search]);

  useEffect(() => {
    if (!value) return;
    fetchMovieByName(value).then(setMovies);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchValue.value;
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setValue(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type to search movies..."
          className={styles.input}
          name="searchValue"
          type="text"
          autoComplete="off"
        ></input>
        <button className={styles.btn} type="submit">
          <HiSearch size={25} color="darkred" />
        </button>
      </form>
      {Movies && <MovieList movies={movies} />}
    </>
  );
}

export default Movies;
