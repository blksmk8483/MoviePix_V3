import {
  API_ACCES_TOKEN,
  API_URL,
  API_IMAGE,
  USER_LANGUAGE,
  OPTIONS,
  TV_OR_MOVIE,
} from "./config.js";

export const state = {
  movie: {},
};

export const loadMovie = async function (id) {
  try {
    const res = await fetch(
      `${API_URL}${TV_OR_MOVIE}/${id}?language=${USER_LANGUAGE}`,
      OPTIONS
    );

    const data = await res.json();
    console.log("look at me!!!", data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const movie = data;
    state.movie = {
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      image: movie.poster_path,
      genreID: movie.genre_ids,
      releaseDate: movie.release_date,
    };

    console.log(state.movie);
  } catch (err) {
    alert(err);
  }
};
