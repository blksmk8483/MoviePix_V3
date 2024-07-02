import { API_IMAGE } from "../config";
import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
          <a class="preview__link preview__link--active" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${API_IMAGE}${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.id}</p>
                <p class="preview__publisher">${result.overview}</p>
              </div>
          </a>
      </li>
    `;
  }
}

export default new ResultsView();

// I need to go back and add the icons ...

// _generateMarkupPreview(result) {
//   return `
//   <li class="preview">
//         <a class="preview__link preview__link--active" href="#23456">
//             <figure class="preview__fig">
//               <img src="${API_IMAGE}${result.image}" alt="${result.title}" />
//             </figure>
//             <div class="preview__data">
//               <h4 class="preview__title">${result.title}</h4>
//               <p class="preview__publisher">${result.overview}</p>
//               <div class="preview__user-generated">
//                 <svg>
//                   <use href="src/img/icons.svg#icon-user"></use>
//                 </svg>
//               </div>
//             </div>
//         </a>
//     </li>
//   `;
