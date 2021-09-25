import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";

const TrendingMovies = lazy(() =>
  import(
    "./components/TrendingMovies/TrendingMovies" /* webpackChunkName: 'trendingMovies' */
  )
);
const Movies = lazy(() =>
  import("./components/Movies/Movies" /* webpackChunkName: 'movies' */)
);
const MovieDetails = lazy(() =>
  import(
    "./components/MovieDetails/MovieDetails" /* webpackChunkName: 'movieDetails' */
  )
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader type="ThreeDots" color="crimson" />}>
        <Switch>
          <Route path="/" exact>
            <TrendingMovies />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
