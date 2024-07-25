import * as model from "./model.js";
import movieView from "./views/movieView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import initialView from "./views/initialView.js";
import nowPlayingView from "./views/nowPlayingView.js";
import topRatedView from "./views/topRatedView.js";
import upcomingView from "./views/upcomingView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

// Initial page yields the most popular movies
export const controlStartingPage = async function () {
  try {
    model.state.view = "initial";
    initialView.renderSpinner();
    await Promise.all([
      model.popularMovies(),
      model.nowPlayingMovies(),
      model.topRatedMovies(),
      model.upcomingMovies(),
    ]);
    initialView.render(model.state.popularMovie);
    nowPlayingView.render(model.state.nowPlayingMovie);
    topRatedView.render(model.state.topRatedMovie);
    upcomingView.render(model.state.upcomingMovie);
  } catch (err) {
    console.log(err);
  }
};

// THIS GETS ME A SPECIFIC MOVIE BASED ON ID
export const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    model.state.view = "movie"; // Set view state to movie

    // Hide the initial list and show the movie view
    document.querySelector(".popular-view-container").classList.add("hidden");
    document.querySelector(".results-view-container").classList.add("hidden");
    document.querySelector(".movie-view-container").classList.remove("hidden");

    if ((model.state.view = "movie")) {
      document.querySelector(".top-rated-container").classList.add("hidden");
      document.querySelector(".now-playing-container").classList.add("hidden");
      document.querySelector(".upcoming-container").classList.add("hidden");
    }

    movieView.renderSpinner();

    // 1) loading movie data...
    await model.loadMovie(id);

    // 2) rendering movie data...
    movieView.render(model.state.movie);

    // 3) User chooses a movie from searchResults and this takes them to the top of the screen
    resultsView.scrollToTop();
  } catch (err) {
    resultsView._clear();
    movieView.renderError();
  }
};

const controlBackToInitial = function () {
  if (model.state.view === "movie") {
    // Hide the movie view
    document.querySelector(".movie-view-container").classList.add("hidden");

    if (model.state.search.query) {
      // If there was a search query, go back to search results
      document
        .querySelector(".results-view-container")
        .classList.remove("hidden");
      resultsView.render(model.state.search.results);
    } else {
      // Otherwise, go back to initial popular movies
      document
        .querySelector(".popular-view-container")
        .classList.remove("hidden");
      document.querySelector(".top-rated-container").classList.remove("hidden");
      document
        .querySelector(".now-playing-container")
        .classList.remove("hidden");
      document.querySelector(".upcoming-container").classList.remove("hidden");
    }

    model.state.view = model.state.search.query ? "search" : "initial";
    movieView._clear();
    window.location.hash = "";
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    model.state.view = "search"; // Set view state to search
    model.state.search.query = query; // Save search query to state

    // 2) Clear the initial popular search results
    initialView._clear();

    // 3) Load search results
    await model.fetchAllResults(query);

    // 4) Render Results
    resultsView.render(model.getSearchResultsPage());

    // 5) Show the results container and hide the initial view container
    document
      .querySelector(".results-view-container")
      .classList.remove("hidden");
    document.querySelector(".popular-view-container").classList.add("hidden");
    document.querySelector(".top-rated-container").classList.add("hidden");
    document.querySelector(".now-playing-container").classList.add("hidden");
    document.querySelector(".upcoming-container").classList.add("hidden");

    // 6) Clear the previous selection away
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
  movieView.addHandlerShowMore();

  // Handle back/forward navigation
  window.addEventListener("hashchange", function () {
    if (!window.location.hash) {
      controlBackToInitial();
    } else {
      controlMovie();
    }
  });
};

init();
