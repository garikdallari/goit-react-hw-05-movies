import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Navigation />
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
    </>
  );
}

export default App;
