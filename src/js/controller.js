// import * as model from "./model.js";
// import movieView from "./views/movieView.js";
// import searchView from "./views/searchView.js";
// import resultsView from "./views/resultsView.js";
// import paginationView from "./views/paginationView.js";
// import initalView from "./views/initialView.js";

// import "core-js/stable";
// import "regenerator-runtime/runtime";

// if (module.hot) {
//   module.hot.accept();
// }

// // Initial page yields the most popular movies
// export const controlStartingPage = async function () {
//   try {
//     initalView.renderSpinner();
//     await model.popularMovies();

//     initalView.render(model.state.popularMovie);
//   } catch (err) {
//     console.log(err);
//   }
// };

// // THIS GETS ME A SPECIFIC MOVIE BASED ON ID
// export const controlMovie = async function () {
//   try {
//     const id = window.location.hash.slice(1);

//     if (!id) return;

//     // Hide the initial list and show the movie view
//     document.querySelector(".initial-view-container").classList.add("hidden");
//     document.querySelector(".movie-view-container").classList.remove("hidden");

//     movieView.renderSpinner();

//     // 1) loading movie data...
//     await model.loadMovie(id);

//     // 2) rendering movie data...
//     movieView.render(model.state.movie);

//     // 3) Clears my search results when a movie is selected

//     // !!!!!!!!!!!! THIS IS WHAT I HAD BEFORE
//     model.clearSearchResults();
//     resultsView._clear();

//     // 4) User chooses a movie from searchResults and this takes them to the top of the screen
//     resultsView.scrollToTop();
//   } catch (err) {
//     resultsView._clear();
//     movieView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();

//     // 1) Get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     // 2) Clear the initial popular search results
//     initalView._clear();

//     // 3) Load search results
//     await model.fetchAllResults(query);

//     // 4) Render Results
//     resultsView.render(model.getSearchResultsPage());

//     // 5) Clear the previous selection away
//     movieView._clear();

//     // 6) Render initial pagination buttons
//   } catch (err) {
//     movieView._clear();
//     resultsView.renderError();
//   }
// };

// const controlLoadMoreResults = async function () {
//   try {
//     await model.fetchAllResults(
//       model.state.search.query,
//       model.state.search.nextPage
//     );
//     resultsView.render(model.state.search.results);
//   } catch (err) {
//     console.log(err);
//     movieView._clear();
//     resultsView.renderError();
//   }
// };

// const controlBackButton = function () {
//   // Show the initial list and hide the movie view
//   document.querySelector(".initial-view-container").classList.remove("hidden");
//   document.querySelector(".movie-view-container").classList.add("hidden");
// };

// // const controlPagination = function (goToPage) {
// //   // 1) Render NEW results
// //   resultsView.render(model.getSearchResultsPage(goToPage));

// //   // 2) Render NEW pagination buttons
// //   paginationView.render(model.state.search);
// // };

// const init = function () {
//   initalView.addHandlerInit(controlStartingPage);
//   movieView.addHandlerRender(controlMovie);
//   movieView.addHandlerBack(controlBackButton);
//   searchView.addHandlerSearch(controlSearchResults);
//   resultsView.addScrollHandler(controlLoadMoreResults);
//   // paginationView.addHandlerClick(controlPagination);
// };
// init();

// ROUND #2 Got the results but the button didn't work.

// import * as model from "./model.js";
// import movieView from "./views/movieView.js";
// import searchView from "./views/searchView.js";
// import resultsView from "./views/resultsView.js";
// import initialView from "./views/initialView.js";

// import "core-js/stable";
// import "regenerator-runtime/runtime";

// if (module.hot) {
//   module.hot.accept();
// }

// // Initial page yields the most popular movies
// export const controlStartingPage = async function () {
//   try {
//     initialView.renderSpinner();
//     await model.popularMovies();
//     initialView.render(model.state.popularMovie);
//   } catch (err) {
//     console.log(err);
//   }
// };

// // THIS GETS ME A SPECIFIC MOVIE BASED ON ID
// export const controlMovie = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     console.log("Movie ID:", id); // Debugging line

//     // Hide the initial list and show the movie view
//     document.querySelector(".initial-view-container").classList.add("hidden");
//     document.querySelector(".movie-view-container").classList.remove("hidden");

//     movieView.renderSpinner();

//     // 1) loading movie data...
//     await model.loadMovie(id);

//     // 2) rendering movie data...
//     movieView.render(model.state.movie);

//     // 3) Clears my search results when a movie is selected
//     model.clearSearchResults();
//     resultsView._clear();

//     // 4) User chooses a movie from searchResults and this takes them to the top of the screen
//     resultsView.scrollToTop();
//   } catch (err) {
//     resultsView._clear();
//     movieView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();

//     // 1) Get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     // 2) Clear the initial popular search results
//     initialView._clear();

//     // 3) Load search results
//     await model.fetchAllResults(query);

//     // 4) Render Results
//     resultsView.render(model.getSearchResultsPage());

//     // 5) Clear the previous selection away
//     movieView._clear();
//   } catch (err) {
//     movieView._clear();
//     resultsView.renderError();
//   }
// };

// const controlLoadMoreResults = async function () {
//   try {
//     await model.fetchAllResults(
//       model.state.search.query,
//       model.state.search.nextPage
//     );
//     resultsView.render(model.state.search.results);
//   } catch (err) {
//     console.log(err);
//     movieView._clear();
//     resultsView.renderError();
//   }
// };

// const init = function () {
//   initialView.addHandlerInit(controlStartingPage);
//   movieView.addHandlerRender(controlMovie);
//   searchView.addHandlerSearch(controlSearchResults);
//   resultsView.addScrollHandler(controlLoadMoreResults);
// };
// init();

import * as model from "./model.js";
import movieView from "./views/movieView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import initialView from "./views/initialView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

// Initial page yields the most popular movies
export const controlStartingPage = async function () {
  try {
    initialView.renderSpinner();
    await model.popularMovies();
    initialView.render(model.state.popularMovie);
  } catch (err) {
    console.log(err);
  }
};

// THIS GETS ME A SPECIFIC MOVIE BASED ON ID
export const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    console.log("Movie ID:", id); // Debugging line

    // Hide the initial list and show the movie view
    document.querySelector(".initial-view-container").classList.add("hidden");
    document.querySelector(".movie-view-container").classList.remove("hidden");

    movieView.renderSpinner();

    // 1) loading movie data...
    await model.loadMovie(id);

    // 2) rendering movie data...
    movieView.render(model.state.movie);

    // 3) Clears my search results when a movie is selected
    model.clearSearchResults();
    resultsView._clear();

    // 4) User chooses a movie from searchResults and this takes them to the top of the screen
    resultsView.scrollToTop();
  } catch (err) {
    resultsView._clear();
    movieView.renderError();
  }
};

const controlBackToInitial = function () {
  // Hide the movie view and show the initial list
  document.querySelector(".movie-view-container").classList.add("hidden");
  document.querySelector(".initial-view-container").classList.remove("hidden");

  // Clear the movie view content
  movieView._clear();

  // Reset the hash
  window.location.hash = "";
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Clear the initial popular search results
    initialView._clear();

    // 3) Load search results
    await model.fetchAllResults(query);

    // 4) Render Results
    resultsView.render(model.getSearchResultsPage());

    // 5) Clear the previous selection away
    movieView._clear();
  } catch (err) {
    movieView._clear();
    resultsView.renderError();
  }
};

const controlLoadMoreResults = async function () {
  try {
    await model.fetchAllResults(
      model.state.search.query,
      model.state.search.nextPage
    );
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
    movieView._clear();
    resultsView.renderError();
  }
};

const init = function () {
  initialView.addHandlerInit(controlStartingPage);
  movieView.addHandlerRender(controlMovie);
  movieView.addHandlerBack(controlBackToInitial);
  searchView.addHandlerSearch(controlSearchResults);
  resultsView.addScrollHandler(controlLoadMoreResults);
};
init();
