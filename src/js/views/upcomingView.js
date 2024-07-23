import View from "./View";
import { API_IMAGE } from "../config";
import noImage from "../../img/movieChairs_HoldTheButter.webp";

class UpcomingView extends View {
  _parentElement = document.querySelector(".upcoming");
  _errorMessage = "Sorry, no upcoming movies are displaying at the moment.";

  addHandlerInit(handler) {
    handler();
  }

  _generateMarkup() {
    return this._data.results.map(this._generateMarkupOMG).join("");
  }

  _generateMarkupOMG(upcomingMovie) {
    const isImage = upcomingMovie.image
      ? `${API_IMAGE}${upcomingMovie.image}`
      : noImage;

    return `
    <li class="m-0.5 p-0 bg-slate-800 text-white snap-always snap-center">
      <a  href="#${upcomingMovie.id}">
        <img class="m-0 max-w-28 rounded-md hover:shadow-lg hover:shadow-slate-600 hover:scale-105 hover:rounded-lg  hover:border hover:border-slate-800" src="${API_IMAGE}${isImage}" alt="${upcomingMovie.title}" />
        <h2 class="my-0 ml-1 pt-1 text-xs font-medium text-balance">${upcomingMovie.title}</h2>
      </a>
    </li>
    `;
  }
}

export default new UpcomingView();
