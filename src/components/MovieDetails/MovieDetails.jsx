import { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  fetchMovieById,
  fetchMovieCasts,
  fetchMovieReviews,
} from "../../services/movies-api";
import MovieCard from "../MovieCard/MovieCard";
import CastList from "../CastList/CastList";
import ReviewList from "../ReviewList/ReviewList";
import styles from "./MovieDetails.module.css";
function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(id)
      .then(setMovie)
      .catch((e) => console.log(e));
    fetchMovieCasts(id)
      .then(setCasts)
      .catch((e) => console.log(e));
    fetchMovieReviews(id)
      .then(setReviews)
      .catch((e) => console.log(e));
  }, [id]);

  const handleGoBack = () => {
    history.push(location.state?.from ? location.state.from : "/");
  };

  const noReviews = reviews.length === 0;
  return (
    <>
      <button onClick={handleGoBack}>Go Back</button>
      <div className={styles.card}>{movie && <MovieCard movie={movie} />}</div>

      <h3>Additional information</h3>
      <nav>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={`${url}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={`${url}/reviews`}
        >
          Reviews
        </NavLink>
      </nav>

      <Switch>
        <Route path={`${path}/cast`}>
          {casts && <CastList casts={casts} />}
        </Route>
        <Route path={`${path}/reviews`}>
          {noReviews ? (
            <p>We don't have any reviews for this movie</p>
          ) : (
            <ReviewList reviews={reviews} />
          )}
        </Route>
      </Switch>
    </>
  );
}

export default MovieDetails;
