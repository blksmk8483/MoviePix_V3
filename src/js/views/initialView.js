import View from "./View";
import { API_IMAGE } from "../config";
import popcornImage from "url:../../img/popcorn.png";

// class InitialView extends View {
//   _parentElement = document.querySelector(".initalResults");
//   _errorMessage = "Sorry no popular movies are displying at the moment.";

//   // render(data) {
//   //   this._data = data;
//   //   const markup = this.generateMarkup();
//   //   // this._clear();
//   //   this._parentElement.insertAdjacentHTML("afterbegin", markup);
//   // }

//   addHandlerInit(handler) {
//     handler();
//   }

//   _generateMarkup() {
//     return this._data.results.map(this._generateMarkupOMG).join("");
//   }

//   _generateMarkupOMG(popularMovie) {
//     return `
//     <li class="m-1.5 p-0 bg-slate-800 text-white">
//       <a href="#${popularMovie.id}">
//         <h2 class="ml-3 mr-2 pt-2.5 text-lg font-medium tracking-wide">${popularMovie.title}</h2>
//         <img class="bg-center max-h-48" src="${API_IMAGE}${popularMovie.image}" alt="${popularMovie.title}" />
//       </a>
//     </li>
//     `;
//   }
// }

// export default new InitialView();

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
    return `
    <li class="m-1.5 p-0 bg-slate-800 text-white">
      <a href="#${popularMovie.id}">
        <h2 class="ml-3 mr-2 pt-2.5 text-lg font-medium tracking-wide">${popularMovie.title}</h2>
        <img class="bg-center max-h-48" src="${API_IMAGE}${popularMovie.image}" alt="${popularMovie.title}" />
      </a>
    </li>
    `;
  }
}

export default new InitialView();
