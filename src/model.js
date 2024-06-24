import { API_ACCES_TOKEN, API_URL } from "./config.js";

export const state = {
  movieData: {},
};

export const options3 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${API_ACCES_TOKEN}`,
  },
};

export const getAPIcall = async () => {
  try {
    const res = await fetch(
      `${API_URL}search/movie?query=Marvel%20Endgame&include_adult=false&language=en-US&page=1&append_to_response=images?include_image_language=299534`,
      options3
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const movieData = data.results["0"];
    state.movieData = {
      id: movieData.id,
      title: movieData.original_title,
      overview: movieData.overview,
      image: movieData.poster_path,
    };
    // return movieData;
    console.log(movieData);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAPIcall();
