import { API_IMAGE } from "../config";
import popcornImage from "url:../../img/popcorn.png";

class MovieView {
  #parentElement = document.querySelector("#testData");
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear;
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    const markup = `
    <div class = "spinner">    
      <img src="${popcornImage}" alt="">
    </div>
    `;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  };

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
