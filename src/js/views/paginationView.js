import View from "./View";
import leftArrow from "url:../../img/Left_Arrow.png";
import rightArrow from "url:../../img/Right_Arrow.png";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
          <use href="./img/Right_Arrow.png"></use>
          </svg>
        </button>
    `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
          <use href="./img/Left_Arrow.png"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
    `;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
          <use href="./img/Left_Arrow.png"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
     
        <use href="./img/Right_Arrow.png"></use>
        </svg>
      </button>
    `;
    }

    // Page 1, and there are NO other pages
    return "";
  }
}
export default new PaginationView();
