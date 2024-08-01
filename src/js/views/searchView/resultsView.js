import { API_IMAGE } from "../../config";
import View from "../View";
import noImage from "../../../img/movieChairs_HoldTheButter.webp";

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
    const isImage = result.image ? `${API_IMAGE}${result.image}` : noImage;

    const releaseDate = isNaN(result.releaseDate) ? "" : result.releaseDate;
    return `
     <li class="m-1.5 p-0 bg-slate-700 rounded-md hover:shadow-white hover:border hover:shadow-md">
      <a class="" href="#${result.id}">
        <img
          class="m-0 bg-contain rounded-t-md "
          src="${isImage}"
          loading="lazy"
          alt="${result.title}"
        />
        <section class="my-0 ml-1.5 content-center text-white text-base tracking-wide">
          <h4 class="pt-0.5">${result.title}</h4>
          <p class="pb-2">${releaseDate}</p>
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
