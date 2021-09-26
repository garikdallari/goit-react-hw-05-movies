import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  return (
    <div className={styles.thumb}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt=""
      />

      <div className={styles.info}>
        <h2>
          {movie.title || movie.name} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User score : {movie.vote_average * 10}%</p>
        <b>Overview</b>
        <p>{movie.overview}</p>
        <b>Genres:</b>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
