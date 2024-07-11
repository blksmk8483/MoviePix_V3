import { API_IMAGE } from "../config";
import View from "./View";
import noImage from "../../img/popcorn.png";

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
     <li class="m-1.5 p-0 bg-slate-700">
      <a class="" href="#${result.id}">
        <img
          class="m-0 bg-cover tablet:w-64 laptop:w-128"
          src="${API_IMAGE}${result.image}"
          alt="${result.title}"
        />

        <section class="my-0 ml-1.5 content-center text-white text-base">
          <h4 class="">${result.title}</h4>
          <p class="">${result.releaseDate}</p>
        </section>
      </a>
    </li>
    `;
  }

  addHandlerLoadMore(handler) {
    this._handlerLoadMore = handler;
  }

  clear() {
    this._parentElement.innerHTML = "";
    // document.querySelector(".search-results");
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling effect
    });
  }
}

export default new ResultsView();