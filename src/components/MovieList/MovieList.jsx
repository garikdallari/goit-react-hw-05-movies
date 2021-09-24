import React from "react";
import { Link, useLocation } from "react-router-dom";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map((movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <p>{movie.name || movie.title}</p>
          </Link>
        ))}
    </ul>
  );
}

export default MovieList;
