import View from "./View";
import { API_IMAGE } from "../config";

class MovieView extends View {
  _parentElement = document.querySelector(".movieView");
  _errorMessage = "Could not find that movie. <br> Please try another one.";
  _message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return `
    <button class="back-button text-slate-700 m-1.5 mt-2.5 ml-2 rounded-lg border-slate-200 bg-white border-2 w-16 hidden md:flex md:justify-center">Back</button>
    <section class="bg-slate-800 text-white">
      <h2 class="ml-3 mr-2 pt-2.5 text-3xl font-medium tracking-wide">${this._data.title}</h2>
      <p class="ml-3 mt-0.5 mr-2 pb-1 text-base tracking-wider">${this._data.tagline}</p>
      <img class="bg-center max-h-svh transition ease-in-out delay-500" src="${API_IMAGE}${this._data.image}" alt="${this._data.title}" />
      <p class="mt-2.5 ml-4 mr-4 text-lg tracking-wide leading-relaxed text-balance">${this._data.overview}</p>
      <p class="ml-4 mt-4 text-lg tracking-wider">${this._data.releaseDate}</p>
      <p class="ml-4 mb-12 pb-4 text-lg tracking-wider">${this._data.runtime} minutes</p>
    </section>
    `;
  }

  addHandlerBack(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".back-button");
      if (!btn) return;
      handler();
    });
  }
}

export default new MovieView();
