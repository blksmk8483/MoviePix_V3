import { API_URL, USER_LANGUAGE, TV_OR_MOVIE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  movie: {},
  search: {
    query: "",
    results: [],
    nextPage: 1,
    page: 1,
    resultsPerPage: 10,
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
      tagline: movie.tagline,
    };
  } catch (err) {
    // Temporary error handling
    console.error(`${err} 😢 😢 😢 😢`);
    throw err;
  }
};

export const loadSearchResults = async function (query, page = 1) {
  try {
    state.search.query = query;

    const data = await getJSON(
      `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}&page=${page}`
    );
    console.log(data);

    state.search.results.push(
      ...data.results.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        image: movie.poster_path,
        genreID: movie.genre_ids,
        releaseDate: movie.release_date,
      }))
    );

    state.search.nextPage = data.page < data.total_pages ? data.page + 1 : null;
  } catch (err) {
    console.error(`${err} 😢 😢 😢 😢`);
    throw err;
  }
};

export async function fetchAllResults(query) {
  while (state.search.nextPage) {
    await loadSearchResults(query, state.search.nextPage);
  }
  console.log(state.search.results);
}

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};
