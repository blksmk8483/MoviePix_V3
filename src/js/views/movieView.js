import View from "./View";
import { API_IMAGE } from "../config";

class MovieView extends View {
  _parentElement = document.querySelector(".movieView");
  _errorMessage = "Could not find that movie. <br> Please try another one.";
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
      <h2 class="ml-3 mr-2 pt-2.5 text-3xl font-medium tracking-wide">${this._data.title}</h2>
      <p class="ml-3 mt-0.5 mr-2 pb-1 text-base tracking-wider">${this._data.tagline}</p>
      <img class="bg-center max-h-svh" src="${API_IMAGE}${this._data.image}" alt="{this._data.title}" />
      <p class="mt-2.5 ml-4 mr-4 text-lg tracking-wide leading-relaxed">${this._data.overview}</p>
      <p class="ml-4 mt-4 text-lg tracking-wider">${this._data.releaseDate}</p>
      <p class="ml-4 pb-4 text-lg tracking-wider">${this._data.runtime} minutes</p>
    </section>
    `;
  }
}

// !!! This adds a link to the homepage from where the movie was created. I can add this later.
{
  /* <p class="ml-4 pb-4 text-lg tracking-wider">${this._data.homepage}</p> */
}

export default new MovieView();

{
  /* <p class="ml-2">GENRES: ${this._data.genres
  .map((data) => {
    return `   ${data.name}`;
  })
  .join(",   ")}</p> */
}
