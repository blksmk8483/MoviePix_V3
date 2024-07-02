import { API_URL, USER_LANGUAGE, TV_OR_MOVIE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  movie: {},
  search: {
    query: "",
    results: [],
  },
};

export const loadMovie = async function (id) {
  try {
    const data = await getJSON(
      `${API_URL}${TV_OR_MOVIE}/${id}?language=${USER_LANGUAGE}`
    );

    const movie = data;
    state.movie = {
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      image: movie.poster_path,
      runtime: movie.runtime,
      releaseDate: movie.release_date,
      genres: movie.genres,
    };
  } catch (err) {
    // Temporary error handling
    console.error(`${err} 😢 😢 😢 😢`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    pageNumber = 1;
    const data = await getJSON(
      `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}&page=${pageNumber}`
    );

    state.search.results = data.results.map((movie) => ({
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      image: movie.poster_path,
      genreID: movie.genre_ids,
      releaseDate: movie.release_date,
    }));
    // console.log(state.search.results);
  } catch (err) {
    console.error(`${err} 😢 😢 😢 😢`);
    throw err;
  }
};
