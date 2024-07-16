import { API_IMAGE } from "../config";
import View from "./View";
import noImage from "../../img/popcornHoldTheButter.webp";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No movies found. Please try again.";
  _message = "";

  addScrollHandler(handler) {
    window.addEventListener("scroll", async () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 10
      ) {
        if (handler) await handler();
      }
    });
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    const imagePath = result.image ? `${API_IMAGE}${result.image}` : noImage;
    return `
     <li class="m-1.5 p-0 bg-slate-700">
      <a class="" href="#${result.id}">
        <img
          class="m-0 bg-cover tablet:w-64 laptop:w-128"
          src="${imagePath}"
          alt="${result.title}"
        />
        <section class="my-0 ml-1.5 content-center text-white text-base tracking-wide">
          <h4 class="pt-0.5">${result.title}</h4>
          <p class="pb-2">${result.releaseDate}</p>
        </section>
      </a>
    </li>
    `;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

export default new ResultsView();