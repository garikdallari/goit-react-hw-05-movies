import React from "react";

function MovieCard({ movie }) {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      <div>
        <h2>
          {movie.title || movie.name} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User score : {movie.vote_average * 10}%</p>
        <b>Overview</b>
        <p>{movie.overview}</p>
        <b>Genres</b>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MovieCard;
