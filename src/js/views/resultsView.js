import { API_IMAGE } from "../config";
import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No movies found. Please try again.";
  _message = "";

  constructor() {
    super();
    this._addScrollHandler();
  }

  _addScrollHandler() {
    window.addEventListener("scroll", async () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 10
      ) {
        if (this._handlerLoadMore) await this._handlerLoadMore();
      }
    });
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
            <a class="preview__link" href="#${result.id}">
                <figure class="preview__fig">
                  <img src="${API_IMAGE}${result.image}" alt="${result.title}" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${result.title}</h4>
                  <p class="preview__publisher">${result.overview}</p>
                </div>
            </a>
        </li>
    `;
  }

  addHandlerLoadMore(handler) {
    this._handlerLoadMore = handler;
  }
}

export default new ResultsView();
