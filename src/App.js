import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
