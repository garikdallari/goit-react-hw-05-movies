import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";
function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies &&
        movies.map((movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt=""
            />
          </Link>
        ))}
    </ul>
  );
}

export default MovieList;
