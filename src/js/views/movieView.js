import View from "./View";

import { API_IMAGE } from "../config";

class MovieView extends View {
  _parentElement = document.querySelector("#testData");
  _errorMessage = "Could not find that movie. Please try another one.";
  _message = "";

  addHandlerRender(handler) {
    // This is the same as the two eventsListeners below just condensed
    // window.addEventListener("hashchange", showMovie);
    // window.addEventListener("load", showMovie);

    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return `
    <h2>${this._data.title}</h2>
    <img class="movieImage" src="${API_IMAGE}${this._data.image}" alt="${
      this._data.title
    }" />
    <p>OVERVIEW: ${this._data.overview}</p>
    <p>ID: ${this._data.id}</p>
    <p>RELEASE DATE: ${this._data.releaseDate}</p>
    <p>RUNTIME: ${this._data.runtime} minutes</p>
    <p>GENRES: ${this._data.genres
      .map((data) => {
        return `   ${data.name}`;
      })
      .join(",   ")}</p>
    `;
  }
}

export default new MovieView();
