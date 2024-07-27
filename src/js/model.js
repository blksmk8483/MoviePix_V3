import { API_URL, USER_LANGUAGE, TV_OR_MOVIE, RES_PER_PAGE } from "./config.js";
import { getJSON, timeConvert } from "./helpers.js";
import moment from "moment";

export const state = {
  popularMovie: {
    results: [],
  },
  nowPlayingMovie: {
    results: [],
  },
  topRatedMovie: {
    results: [],
  },
  upcomingMovie: {
    results: [],
  },
  movie: {},
  search: {
    query: "",
    results: [],
    nextPage: 1, // this references the next page of the api call (total_pages)
    page: 1, // this references the next page the user will click
    resultsPerPage: RES_PER_PAGE,
  },
  view: "initial", // initial, search, or movie
};

export const loadMovie = async function (id) {
  try {
    // Check if the movie ID is the same as the one in the state
    if (state.movie.id === id) return; // Avoid reloading the same movie

    const data = await getJSON(
      `${API_URL}${TV_OR_MOVIE}/${id}?language=${USER_LANGUAGE}&append_to_response=videos,images,reviews,credits,recommendations`
    );
    // console.log("LOAD MOVIE", data);
    const movie = data;
    state.movie = {
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      image: movie.poster_path,
      backgroundImage: movie.backdrop_path,
      runtime: timeConvert(movie.runtime),
      releaseDate: moment(movie.release_date).format("YYYY"),
      genres: movie.genres,
      tagline: movie.tagline,
      homepage: movie.homepage,
      credits: movie.credits.cast.map((result) => ({
        actorName: result.original_name,
        characterName: result.character,
        actorImg: result.profile_path,
      })),
      reviews: movie.reviews.results.map((result) => ({
        author: result.author,
        authorAvatar: result.author_details.avatar_path,
        authorRating: result.author_details.rating,
        authorURL: result.author_details.url,
        content: result.content,
      })),
      videos: movie.videos.results.map((video) => ({
        id: video.id,
        key: video.key,
        name: video.name,
        site: video.site,
        type: video.type,
      })),
      recommendations: movie.recommendations.results.map((result) => ({
        recTitle: result.original_title,
        recImg: result.backdrop_path,
      })),
    };
  } catch (err) {
    // Temporary error handling
    console.error(`${err} 😢 😢 😢 😢`);
    throw err;
  }
};

export const loadSearchResults = async function (query, page = 1) {
  try {
    // Check if the new query is different from the current one
    if (state.search.query !== query) {
      // Reset state for a new search query
      state.search.query = query;
      state.search.results = []; // Clear previous search results
      state.search.page = 1; // Reset current page to 1
      state.search.nextPage = 1; // Reset nextPage to 1
    }

    const data = await getJSON(
      `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}&page=${page}`
    );
    // console.log("Search:", data);
    state.search.results.push(
      ...data.results.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        image: movie.poster_path,
        backdrop: movie.backdrop_path,
        genreID: movie.genre_ids,
        releaseDate: moment(movie.release_date).format("YYYY"),
      }))
    );

    state.search.nextPage = data.page < data.total_pages ? data.page + 1 : null;
  } catch (err) {
    console.error(`${err} 😢 😢 😢 😢`);
    throw err;
  }
};

export async function fetchAllResults(query) {
  state.search.results = []; // Clears the previous search results
  state.search.page = 1; // Resets the current page counter to 1
  state.search.nextPage = 1; // Resets the next page counter to 1

  // This loop continues as long as state.search.nextPage has a truthy value (i.e., there are more pages to fetch).
  while (state.search.nextPage) {
    await loadSearchResults(query, state.search.nextPage);
  }
}

export const clearSearchResults = function () {
  state.search.query = "";
  state.search.results = [];
};

// PAGINATION - THIS WILL BE FOR FULL SCREEN ONLY
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};

export const popularMovies = async function () {
  try {
    const data = await getJSON(`
      ${API_URL}${TV_OR_MOVIE}/popular?language=en-US&page=1`);
    // console.log("popular", data);
    state.popularMovie.results = data.results.map((popular) => ({
      id: popular.id,
      title: popular.title,
      image: popular.poster_path,
      overview: popular.overview,
    }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const nowPlayingMovies = async function () {
  try {
    const data = await getJSON(`
      ${API_URL}${TV_OR_MOVIE}/now_playing?language=en-US&page=1`);
    // console.log(data);
    state.nowPlayingMovie.results = data.results.map((nowPlaying) => ({
      id: nowPlaying.id,
      title: nowPlaying.original_title,
      image: nowPlaying.poster_path,
      overview: nowPlaying.overview,
    }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const topRatedMovies = async function () {
  try {
    const data = await getJSON(`
      ${API_URL}${TV_OR_MOVIE}/top_rated?language=en-US&page=1`);
    // console.log("top rated", data);

    state.topRatedMovie.results = data.results.map((topRated) => ({
      id: topRated.id,
      title: topRated.title,
      image: topRated.poster_path,
      overview: topRated.overview,
    }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const upcomingMovies = async function () {
  try {
    const data = await getJSON(`
      ${API_URL}${TV_OR_MOVIE}/top_rated?language=en-US&page=1`);
    // console.log("top rated", data);

    state.upcomingMovie.results = data.results.map((upcomingMovie) => ({
      id: upcomingMovie.id,
      title: upcomingMovie.title,
      image: upcomingMovie.poster_path,
      overview: upcomingMovie.overview,
    }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};
