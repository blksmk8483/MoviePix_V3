import View from "./View";
import { API_IMAGE } from "../config";
import noImage from "../../img/spilledPopcornHoldTheButter.webp";

class MovieView extends View {
  _parentElement = document.querySelector(".movieView");
  _errorMessage = "Could not find that movie. <br> Please try another one.";
  _message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return `
        <button
          class="back-button text-slate-700 m-1.5 mt-2.5 ml-2 rounded-lg border-slate-200 bg-white border-2 w-16 hidden md:flex md:justify-center xl:mx-8"
        >
          Back
        </button>
        <section class="bg-slate-800 text-white">
          <h2
            class="mx-2 pt-2.5 text-3xl font-medium tracking-wide md:mx-2 xl:mx-8"
          >
            ${this._data.title}
          </h2>
          <q class="mx-2 mt-0.5 pb-1 text-base tracking-wider md:mx-2 xl:mx-8"
            >${this._data.tagline}</q
          >

          <div
            class="sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:mx-2 md:gap-3 lg:mx-0 lg:mb-8 lg:gap-12 xl:mx-8"
          >
            <img
              class="mx-0 object-cover max-w-svh md:max-w-full lg:max-w-full xl:max-w-full"
              src="${API_IMAGE}${this._data.image}"
              alt="${this._data.title}"
            />

            <div class="col-span-2 sm:col-span-1 md:col-span-2">
              <p
                class="mx-2 mt-2.5 text-lg tracking-wide leading-relaxed text-balance sm:mt-0"
              >
                ${this._data.overview}
              </p>
              <p class="mx-2 mt-4 text-lg tracking-wider">
                ${this._data.releaseDate}
              </p>
              <p class="mx-2 mb-4 pb-4 text-lg tracking-wider">
                ${this._data.runtime} minutes
              </p>
    
              <section class="videos mb-4 mx-2">
                <h3 class="text-lg tracking-wider">Trailers:</h3>
                <ul class="container">
                  <li
                    class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                  >
                    ${this._data.videos
                      .map(
                        (video) => `<iframe
                      class="mt-2 mb-2 mx-0.5 aspect-video snap-always snap-center"
                      src="https://www.youtube.com/embed/${video.key}"
                      frameborder="0"
                      allowfullscreen
                    ></iframe
                    >`
                      )
                      .join("")}
                  </li>
                </ul>
              </section>
              ${this._generateMarkupReview()}
            </div>
          </div>
        </section>
      `;
  }

  _generateMarkupReview() {
    return `
      <div class="overscroll-none mb-4 mx-2">
      <section class="flex justify-between">  
        <p class="mb-2 text-lg tracking-wider">Reviews:</p> 
          <button class="show-more-btn mb-4 mt-1 text-white hover:underline">Show More</button>
          </section>
        <div class="reviews h-72 flex flex-col gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content">
          
          ${this._data.reviews
            .map((review, index) => {
              const authorAvatar = review.authorAvatar
                ? `${API_IMAGE}${review.authorAvatar}`
                : noImage;
              const authorRating = review.authorRating
                ? `<p> <sup>${review.authorRating} </sup>&frasl;<sub>10</sub>  &#x2b50;</p>`
                : "";

              return `
                <section class="review ${
                  index > 0 ? "hidden" : ""
                } mb-4 p-1.5 text-lg tracking-wide leading-relaxed text-pretty bg-slate-700 rounded">
                  <section class="flex gap-x-2.5 place-items-center justify-between">      
                  <aside class="flex gap-x-1.5">  
                  <img
                      class="bg-center h-8 w-8 rounded-full"
                      src="${authorAvatar}"
                      alt="${review.author}"
                    />
                    <h2>  ${review.author}:</h2>
                    </aside>
                    ${authorRating}
                  </section>
                  <p class="leading-snug mt-3 text-pretty">${review.content}</p>
                </section>
              `;
            })
            .join("")}
            </div>
            
      </div>
    `;
  }

  addHandlerBack(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".back-button");
      if (!btn) return;
      handler();
    });
  }

  addHandlerShowMore() {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".show-more-btn");
      if (!btn) return;

      const hiddenReviews = document.querySelectorAll(".review.hidden");
      const visibleReviews = document.querySelectorAll(".review:not(.hidden)");

      if (btn.textContent === "Show More") {
        hiddenReviews.forEach((review) => {
          review.classList.remove("hidden");
          document
            .querySelector(".reviews")
            .setAttribute("style", "height: 22rem;");
        });
        btn.textContent = "Show Less";
      } else {
        visibleReviews.forEach((review, index) => {
          if (index > 0) review.classList.add("hidden");
        });
        btn.textContent = "Show More";
        document
          .querySelector(".reviews")
          .setAttribute("style", "height: 18rem;");
      }
    });
  }
}

export default new MovieView();
