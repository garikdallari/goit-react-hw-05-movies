import axios from "axios";

const API_KEY = "93e18502a4f670f89316c5fc1b091bd6";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data.results;
};

export async function fetchMovieById(id) {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

export async function fetchMovieCasts(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
}
export async function fetchMovieReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
}
export async function fetchMovieByName(query) {
  const { data } = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return data.results;
}
