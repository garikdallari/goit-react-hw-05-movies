import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../services/movies-api";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <p>{movie.name || movie.title}</p>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrendingMovies;
