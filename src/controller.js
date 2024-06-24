// import * as model from "./model.js";
// import searchResultsView from "./view/SearchResultsView.js";

// const searchMovie = async function () {
//   try {
//     await model.getAPIcall();

//     searchResultsView.render(model.state.movieData);
//   } catch (err) {
//     console.log(err);
//   }
// };

// // const init = function () {
// //   // searchResultsView._generateMarkup(searchMovie);
// //   // searchResultsView.addHandlerRender(searchMovie);
// //   searchResultsView.render(searchMovie);
// // };
// // init();

// // console.log("hello there");

import { API_ACCES_TOKEN, API_URL, API_IMAGE } from "./config.js";

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
    // 1) loading movie data...
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
      releaseDate: movieData.release_date,
    };
    console.log(movieData);

    testData = document.querySelector("#testData");

    // 2) rendering movie data...
    const markup = `
    <h2>${movieData.title}</h2>
    <img class="movieImage" src="${API_IMAGE}${state.movieData.image}" alt="${
      movieData.title
    }" />
    <p>OVERVIEW: ${movieData.overview}</p>
    <p>ID: ${movieData.id}</p>
    <p>RELEASE DATE: ${state.movieData.releaseDate}</p>

    <p>Lets try this...</p>
    <p>This shows the three genre ids</p>
    <ul> 
    ${movieData.genre_ids.map((ids) => {
      return `
      <li>
      ${ids}
      </li>`;
    })}
    </ul>
    `;

    testData.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(err);
  }
};

getAPIcall();
