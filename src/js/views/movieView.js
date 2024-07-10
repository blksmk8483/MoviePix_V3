import View from "./View";

import { API_IMAGE } from "../config";

class MovieView extends View {
  _parentElement = document.querySelector(".movieView");
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
    <section class="bg-slate-800 text-white">
      <h2 class="ml-2 pt-2.5 text-3xl font-medium tracking-wide">${this._data.title}</h2>
      <p class="ml-2 mt-0.5 pb-1 text-base tracking-wider">${this._data.tagline}</p>
      <img class="bg-center bg-cover h-2/5" src="${API_IMAGE}${this._data.image}" alt="{this._data.title}" />
      <p class="m-2.5 text-base tracking-wide leading-relaxed">${this._data.overview}</p>
      <p class="ml-2 mt-4 text-base tracking-wider">${this._data.releaseDate}</p>
      <p class="ml-2 pb-2 text-base tracking-wider">${this._data.runtime} minutes</p>
    </section>
    `;
  }
}

export default new MovieView();

{
  /* <p class="ml-2">GENRES: ${this._data.genres
  .map((data) => {
    return `   ${data.name}`;
  })
  .join(",   ")}</p> */
}
