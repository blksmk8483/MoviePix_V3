class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        handler();
        document.activeElement.blur();
      }
    });
  }
}

export default new SearchView();
