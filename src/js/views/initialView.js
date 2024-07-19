import View from "./View";
import { API_IMAGE } from "../config";
import noImage from "../../img/movieChairs_HoldTheButter.webp";

class InitialView extends View {
  _parentElement = document.querySelector(".initialResults");
  _errorMessage = "Sorry, no popular movies are displaying at the moment.";

  addHandlerInit(handler) {
    handler();
  }

  _generateMarkup() {
    return this._data.results.map(this._generateMarkupOMG).join("");
  }

  _generateMarkupOMG(popularMovie) {
    const isImage = popularMovie.image
      ? `${API_IMAGE}${popularMovie.image}`
      : noImage;

    return `
    <li class="m-1.5 p-0 bg-slate-800 text-white">
      <a href="#${popularMovie.id}">
        <img class="m-0 bg-cover" src="${API_IMAGE}${isImage}" alt="${popularMovie.title}" />
        <h2 class="my-0 ml-1 pt-1 text-lg content-center font-medium tracking-wide">${popularMovie.title}</h2>
      </a>
    </li>
    `;
  }
}

export default new InitialView();
