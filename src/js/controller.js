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

    if (!id) return;
    movieView.renderSpinner();

    // 1) loading movie data...
    await model.loadMovie(id);

    // 2) rendering movie data...
    movieView.render(model.state.movie);

    // 3) Clears my search results when a movie is selected
    model.clearSearchResults();
    resultsView.clear();

    // 4) User chooses a movie from searchResults and this takes them to the top of the screen
    resultsView.scrollToTop();
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

    // 2) Clear previous results and reset state
    // model.state.search.results = [];
    // model.state.search.page = 1;
    // model.state.search.nextPage = 1;

    // 3) Load search results
    await model.fetchAllResults(query);

    // 4) Render Results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 5) Clear the previous selection away
    movieView._clear();

    // 6) Render initial pagination buttons
    // paginationView.render(model.state.search);
  } catch (err) {
    // console.log(err);
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
    resultsView.renderError();
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
  resultsView.addHandlerLoadMore(controlLoadMoreResults);
  // paginationView.addHandlerClick(controlPagination);
};
init();
