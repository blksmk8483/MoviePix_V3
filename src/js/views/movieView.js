import { API_IMAGE } from "../config";
import popcornImage from "url:../../img/popcorn.png";
import errorIcon from "url:../../img/spilled-popcorn.png";

class MovieView {
  #parentElement = document.querySelector("#testData");
  #data;
  #errorMessage = "Could not find that movie. Please try another one.";
  #message = "";

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class = "spinner">    
      <img src="${popcornImage}" alt="">
    </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.#errorMessage) {
    const markup = `
    <div class="error">
         <img src="${errorIcon}">
      <p>${message}</p>
    </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this.#message) {
    const markup = `
    <div class="messge">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRender(handler) {
    // This is the same as the two eventsListeners below just condensed
    // window.addEventListener("hashchange", showMovie);
    // window.addEventListener("load", showMovie);

    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  #generateMarkup() {
    return `
    <h2>${this.#data.title}</h2>
    <img class="movieImage" src="${API_IMAGE}${this.#data.image}" alt="${
      this.#data.title
    }" />
    <p>OVERVIEW: ${this.#data.overview}</p>
    <p>ID: ${this.#data.id}</p>
    <p>RELEASE DATE: ${this.#data.releaseDate}</p>
    `;
  }
}

export default new MovieView();
