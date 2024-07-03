import { API_URL, USER_LANGUAGE, TV_OR_MOVIE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  movie: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: 5,
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

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    // pageNumber = 1;

    const data = await getJSON(
      `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}`
    );
    // console.log(data.total_pages);

    console.log(data);
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

// PRACTICE AREA 😁
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};

// export const getSearchResultsPage = async function (page = state.search.page) {
//   try {
//     // state.search.query = query;
//     loadSearchResults(query) = query
//     state.search.page = page;

//     const data = await getJSON(
//       `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}&page=${page}`
//     );
//     console.log(data);
//     page = data.total_pages;

//     const start = (page - 1) * state.search.resultsPerPage; // 0
//     const end = page * state.search.resultsPerPage; // 9

//     return state.search.results.slice(start, end);

//     console.log(data);
//     state.search.results = data.results.map((movie) => ({
//       id: movie.id,
//       title: movie.original_title,
//       overview: movie.overview,
//       image: movie.poster_path,
//       genreID: movie.genre_ids,
//       releaseDate: movie.release_date,
//     }));
//     // console.log(state.search.results);
//   } catch (err) {
//     console.error(`${err} 😢 😢 😢 😢`);
//     throw err;
//   }
// };
