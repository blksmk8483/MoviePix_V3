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

import {
  API_ACCES_TOKEN,
  API_URL,
  API_IMAGE,
  USER_LANGUAGE,
} from "./config.js";
import popcornImage from "url:./img/popcorn.png";
import "core-js/stable";
import "regenerator-runtime/runtime";

// export const state = {
//   movieData: {},
// };

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${API_ACCES_TOKEN}`,
  },
};

const renderSpinner = function (parentEl) {
  const markup = `
  <div class = "spinner">    
    <img src="${popcornImage}" alt="">
  </div>
  `;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

// THIS GETS ME A SPECIFIC MOVIE BASED ON ID
export const showMovie = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    // I can use "movie" or "tv"
    const searchType = "movie";

    if (!id) return;

    pageNumber = 1;

    renderSpinner(testData);
    // 1) loading movie data...
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

    testData = document.querySelector("#testData");

    // 2) rendering movie data...
    const markup = `
    <h2>${movieData.title}</h2>
    <img class="movieImage" src="${API_IMAGE}${movieData.image}" alt="${movieData.title}" />
    <p>OVERVIEW: ${movieData.overview}</p>
    <p>ID: ${movieData.id}</p>
    <p>RELEASE DATE: ${movieData.releaseDate}</p>
    `;

    testData.innerHTML = "";
    testData.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(err);
  }
};

// Now I am calling getAPIcall() in the event
// getAPIcall();

// This is the same as the two eventsListeners below just condensed
["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showMovie));
// window.addEventListener("hashchange", showMovie);
// window.addEventListener("load", showMovie);

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// THIS GETS ME ALL MOVIES BASED ON A SEARCH QUERY

export const searchResultsAll = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    pageNumber = 1;
    query = "Spider Man";

    // 1) loading search data...
    const res = await fetch(
      `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}&page=${pageNumber}`,
      OPTIONS
    );

    const data = await res.json();
    console.log(data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const movieDataAll = data.results.map((movie) => ({
      id: movie.id,
      title: movie.original_title,
      overview: movie.overview,
      image: movie.poster_path,
      genreID: movie.genre_ids,
      releaseDate: movie.release_date,
    }));

    console.log(movieDataAll);

    testAllData = document.querySelector("#testAllData");

    // 2) rendering all search data...
    const markup = movieDataAll
      .map((movie) => {
        return `
    <h2>${movie.title}</h2>
    <img class="movieImage" src="${API_IMAGE}${movie.image}" alt="${
          movie.title
        }" />
    <p>OVERVIEW: ${movie.overview}</p>
    <p>ID: ${movie.id}</p>
    <p>RELEASE DATE: ${movie.releaseDate}</p>
    <p>GENRE ID: ${movie.genreID
      .map((gID) => {
        return `
      ${gID}`;
      })
      .join("")}</p>
    `;
      })
      .join("");

    testAllData.innerHTML = "";
    testAllData.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(err);
  }
};

searchResultsAll();
