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
