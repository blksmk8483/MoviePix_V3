import * as model from "./model.js";
import movieView from "./views/movieView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

// THIS GETS ME A SPECIFIC MOVIE BASED ON ID
export const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    movieView.renderSpinner();

    // 1) loading movie data...
    await model.loadMovie(id);

    // 2) rendering movie data...
    movieView.render(model.state.movie);
  } catch (err) {
    movieView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.fetchAllResults(query);

    // 3) Render Results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  movieView.addHandlerRender(controlMovie);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// THIS GETS ME ALL MOVIES BASED ON A SEARCH QUERY

// export const searchResultsAll = async () => {
//   try {
//     const id = window.location.hash.slice(1);
//     console.log(id);

//     pageNumber = 1;
//     query = "Spider Man";

//     // 1) loading search data...
//     const res = await fetch(
//       `${API_URL}search/movie?query=${query}&include_adult=false&language=${USER_LANGUAGE}&page=${pageNumber}`,
//       OPTIONS
//     );

//     const data = await res.json();
//     console.log(data);

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);

//     const movieDataAll = data.results.map((movie) => ({
//       id: movie.id,
//       title: movie.original_title,
//       overview: movie.overview,
//       image: movie.poster_path,
//       genreID: movie.genre_ids,
//       releaseDate: movie.release_date,
//     }));

//     console.log(movieDataAll);

//     testAllData = document.querySelector("#testAllData");

//     // 2) rendering all search data...
//     const markup = movieDataAll
//       .map((movie) => {
//         return `
//     <h2>${movie.title}</h2>
//     <img class="movieImage" src="${API_IMAGE}${movie.image}" alt="${
//           movie.title
//         }" />
//     <p>OVERVIEW: ${movie.overview}</p>
//     <p>ID: ${movie.id}</p>
//     <p>RELEASE DATE: ${movie.releaseDate}</p>
//     <p>GENRE ID: ${movie.genreID
//       .map((gID) => {
//         return `
//       ${gID}`;
//       })
//       .join("")}</p>
//     `;
//       })
//       .join("");

//     testAllData.innerHTML = "";
//     testAllData.insertAdjacentHTML("afterbegin", markup);
//   } catch (err) {
//     alert(err);
//   }
// };

// searchResultsAll();
