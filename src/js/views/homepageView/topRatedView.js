import View from "../View";
import { API_IMAGE } from "../../config";
import noImage from "../../../img/movieChairs_HoldTheButter.webp";

class TopRatedView extends View {
  _parentElement = document.querySelector(".top-rated");
  _errorMessage = "Sorry, no top rated movies are displaying at the moment.";

  addHandlerInit(handler) {
    handler();
  }

  _generateMarkup() {
    return this._data.results.map(this._generateMarkupOMG).join("");
  }

  _generateMarkupOMG(topRatedMovie) {
    const isImage = topRatedMovie.image
      ? `${API_IMAGE}${topRatedMovie.image}`
      : noImage;

    return `
    <li class="m-0.5 p-0 bg-transparent text-slate-200 snap-always snap-center">
      <a  href="#${topRatedMovie.id}">
        <img class="m-0 max-w-28 rounded-md hover:shadow-lg hover:shadow-slate-600 hover:scale-105 hover:rounded-lg  hover:border hover:border-slate-800" src="${API_IMAGE}${isImage}" alt="${topRatedMovie.title}" />
        <h2 class="my-0 ml-1 pt-1 text-xs font-semibold text-balance">${topRatedMovie.title}</h2>
      </a>
    </li>
    `;
  }
}

export default new TopRatedView();
