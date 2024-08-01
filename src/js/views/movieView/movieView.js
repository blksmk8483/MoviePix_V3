import View from "../View";
import { API_IMAGE } from "../../config";
import { generateMarkupReview, addHandlerShowMore } from "./reviewView";
import { generateMarkupActor } from "./actorView";
import { generateMarkupTrailer } from "./trailersView";
import { generateMarkupRecommendation } from "./recommendationsView";

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
      <button
        class="back-button text-slate-700 m-1.5 mt-2.5 ml-2 rounded-lg border-slate-200 bg-slate-100 border-2 w-16 hidden hover:bg-slate-200 hover:border-slate-600 md:flex md:justify-center xl:mx-8">
        Back
      </button>

      <section class="text-white bg-center bg-cover">
            <h2 class="text-3xl flex justify-between content-center mx-2 pt-2.5 font-bold tracking-wide md:mx-2 xl:mx-8">
              ${this._data.title} 
            </h2>
          
          <section class="flex text-m text-slate-400 tracking-wider mx-2 md:mx-2 xl:mx-8">
              <p class="">(${this._data.releaseDate})</p>
              <p class="mx-2 mb-4">
              ${this._data.runtime}
              </p>
            </section>

            <q class="mx-2 mt-0.5 pb-1 text-base tracking-wider md:mx-2 xl:mx-8">${
              this._data.tagline
            }</q>

        <section class="sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:mx-2 md:gap-3 lg:mx-0 lg:mb-8 lg:gap-12 xl:mx-8">
            <img
              class="mx-0 object-cover mt-1 max-w-svh md:max-w-full lg:max-w-full xl:max-w-full"
              src="${API_IMAGE}${this._data.backgroundImage}"
              alt="${this._data.title}"
            />

            <p class="col-span-2 mx-2 mt-2.5 mb-8 text-lg tracking-wide leading-relaxed text-balance sm:mt-0 sm:col-span-1 md:col-span-2">
              ${this._data.overview}
            </p>
          </section>

          ${generateMarkupTrailer(this._data)}
          ${generateMarkupActor(this._data)}
          ${generateMarkupReview(this._data)}
          ${generateMarkupRecommendation(this._data)}
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

  addHandlerShowMore() {
    addHandlerShowMore(this._parentElement);
  }

  addHandlerRecommendationClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const movieEl = e.target.closest("[data-movie-id]");
      if (!movieEl) return;

      const movieId = movieEl.dataset.movieId;
      handler(movieId);
    });
  }
}

export default new MovieView();
