import popcornImage from "url:../../img/popcorn.png";
import errorIcon from "url:../../img/spilled-popcorn.png";

export default class View {
  _data;

  render(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();
    if (!data || data.length === 0) return;
    // if (Array.isArray(data) && data.length === 0) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class = "spinner col-span-full">    
      <img class="bg-center" src="${popcornImage}" alt="Bucket of popcorn rotating 360 degrees in a clockwise rotation.">
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error mt-7">
         <img class="bg-center max-h-svh" src="${errorIcon}">
      <p class="m-4 text-2xl text-white text-center tracking-wider">${message}</p>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
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
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
