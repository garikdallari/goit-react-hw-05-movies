import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchMovieByName } from "../../services/movies-api";
import MovieList from "../MovieList/MovieList";

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
        <input name="searchValue" type="text"></input>
        <button type="submit">Search</button>
      </form>

      {Movies && <MovieList movies={movies} />}
    </>
  );
}

export default Movies;
