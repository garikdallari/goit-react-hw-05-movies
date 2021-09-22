import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/movies-api";
import styles from "./MovieDetails.module.css";
function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);

  return (
    <div className={styles.card}>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=""
          />
          <div>
            <h2>
              {movie.title || movie.name} ({movie.release_date.slice(0, 4)})
            </h2>
            <b>Overview</b>
            <p>{movie.overview}</p>
            <b>Genres</b>
            <ul>
              {movie.genres.map((genre) => (
                <li>{genre.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
