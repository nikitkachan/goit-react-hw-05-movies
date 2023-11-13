import axios from 'axios';

const API_KEY = 'a7dde24bc80070e7cc27b7a3c039ad7e';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchMovies(endPoint) {
  const url = BASE_URL + endPoint + `&api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data;
}

export async function fetchMovieById(movieId) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2RkZTI0YmM4MDA3MGU3Y2MyN2I3YTNjMDM5YWQ3ZSIsInN1YiI6IjY1NGE3MjhkZmQ0ZjgwMDEwMWI3OTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLs_coIGniZz3rHJhpnbRhPNnr1FLCXJ7grh_79FRuI',
    },
  };
  const response = await axios.request(options);

  return response.data;
}
