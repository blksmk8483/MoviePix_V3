// import { API_ACCES_TOKEN, API_URL } from "../config.js";

export const state = {
  movie: {},
};

const res = await fetch(
  `https://api.themoviedb.org/3/${searchType}/${id}?language=${USER_LANGUAGE}`,
  OPTIONS
);
console.log(res);

const data = await res.json();
console.log(data);

if (!res.ok) throw new Error(`${data.message} (${res.status})`);

const movieData = {
  id: data.id,
  title: data.original_title,
  overview: data.overview,
  image: data.poster_path,
  genreID: data.genre_ids,
  releaseDate: data.release_date,
};

console.log(movieData);

// export const options3 = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `${API_ACCES_TOKEN}`,
//   },
// };

// export const getAPIcall = async () => {
//   try {
//     const res = await fetch(
//       `${API_URL}search/movie?query=Marvel%20Endgame&include_adult=false&language=en-US&page=1&append_to_response=images?include_image_language=299534`,
//       options3
//     );

//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);

//     const movieData = data.results["0"];
//     state.movieData = {
//       id: movieData.id,
//       title: movieData.original_title,
//       overview: movieData.overview,
//       image: movieData.poster_path,
//     };
//     // return movieData;
//     console.log(movieData);
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAPIcall();
