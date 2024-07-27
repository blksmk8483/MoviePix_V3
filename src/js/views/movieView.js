import View from "./View";
import { API_IMAGE } from "../config";
import noImage from "../../img/spilledPopcornHoldTheButter.webp";
import noActorImage from "../../img/movieChairs_HoldTheButter.webp";

class MovieView extends View {
  _parentElement = document.querySelector(".movieView");
  _errorMessage = "Could not find that movie. <br> Please try another one.";
  _message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  // <section class=" text-white bg-center bg-cover" style="background-image: url(${API_IMAGE}${
  //   this._data.backgroundImage
  // });">

  _generateMarkup() {
    return `
      <button
        class="back-button text-slate-700 m-1.5 mt-2.5 ml-2 rounded-lg border-slate-200 bg-slate-100 border-2 w-16 hidden hover:bg-slate-200 hover:border-slate-600  md:flex md:justify-center xl:mx-8">
        Back
      </button>

      <section class=" text-white bg-center bg-cover">
            <section class="flex justify-between content-center mx-2 pt-2.5 font-medium tracking-wide md:mx-2 xl:mx-8">
              <h2 class="text-3xl font-bold">
                ${this._data.title} 
              </h2>
              </section>

          <section class="flex text-m text-slate-400 tracking-wider mx-2 md:mx-2 xl:mx-8">
                <p class="">(${this._data.releaseDate})</p>
                <p class="mx-2 mb-4">
                      ${this._data.runtime}
                </p>
            </section>

        <q class="mx-2 mt-0.5 pb-1 text-base tracking-wider md:mx-2 xl:mx-8">${
          this._data.tagline
        }</q>

        <div
          class="sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:mx-2 md:gap-3 lg:mx-0 lg:mb-8 lg:gap-12 xl:mx-8">
          <img
            class="mx-0 object-cover mt-1    max-w-svh md:max-w-full lg:max-w-full xl:max-w-full"
            src="${API_IMAGE}${this._data.backgroundImage}"
            alt="${this._data.title}"
          />

          <div class="col-span-2 sm:col-span-1 md:col-span-2">
            <p
              class="mx-2 mt-2.5 mb-8 text-lg tracking-wide leading-relaxed text-balance sm:mt-0"
            >
              ${this._data.overview}
            </p>
           
      </section>


            <section class="videos mb-4 mx-2 mt-4 text-white md:mx-2 xl:mx-8">
              <ul class="container">
              <p class="mb-2 text-lg tracking-wider font-semibold text-slate-100">Trailers:</p>
                <li
                  class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                >
                  ${this._data.videos
                    .map(
                      (video) => `<iframe
                    class="mt-2 mb-4 mx-0.5 aspect-video snap-always snap-center"
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

            <section class="actor-container mb-4 mx-2 text-white md:mx-2 xl:mx-8">
              <ul class="container">
              <p class="mb-2 text-lg tracking-wider font-semibold text-slate-100">Cast:</p>
                <li
                  class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                >
                  ${this._data.credits
                    .map((result) => {
                      const isActorImage = result.actorImg
                        ? `${API_IMAGE}${result.actorImg}`
                        : noActorImage;
                      return `
                  <section class="flex flex-col">
                    <img
                      class="mx-1 my-2 bg-center rounded-full max-w-32 max-h-32 hover:shadow-lg hover:shadow-slate-600 hover:scale-105 hover:border hover:border-slate-800"
                      src="${isActorImage}"
                      alt="${this._data.actorName}"
                    />

                    <p class="my-0 ml-1 pt-1 text-xs tracking-tight font-bold">
                      ${result.actorName}
                    </p>
                    <p class="my-0 ml-1 pt-1 text-xs tracking-tight text-slate-400">
                      ${result.characterName}
                    </p>
                  </section>
                  `;
                    })
                    .join("")}
                </li>
              </ul>
            </section>

            ${this._generateMarkupReview()}
          </div>
        </div>

         <section class="recommendations-container mb-4 mx-2 text-white md:mx-2 xl:mx-8">
              <ul class="container">
               <p class="mb-2 text-lg tracking-wider font-semibold text-slate-100">Recommendations:</p>
                <li
                  class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                >
                  ${this._data.recommendations
                    .map((result) => {
                      const isRecImage = result.recImg
                        ? `${API_IMAGE}${result.recImg}`
                        : noActorImage;
                      return `
                  <section class="flex flex-col">
                    <img
                      class="mx-1 my-1 bg-center max-w-56 max-h-auto rounded-md snap-always snap-center hover:shadow-lg hover:shadow-slate-600 hover:scale-105 hover:border hover:border-slate-800 sm:max-w-64 sm:max-h-auto"
                      src="${isRecImage}"
                      alt="${this._data.recTitle}"
                    />

                    <p class="my-0 ml-1 pt-1 text-md font-semibold tracking-tight text-slate-100">
                      ${result.recTitle}
                    </p>
                  
                  </section>
                  `;
                    })
                    .join("")}
                </li>
              </ul>
            </section>
      
      `;
  }

  _generateMarkupReview() {
    return `
      <div class="overscroll-none  overscroll-x-none mb-4 mx-2 text-white md:mx-2 xl:mx-8">
      <section class="flex justify-between">  
        <p class="mb-2 text-lg tracking-wider font-semibold text-slate-200">Reviews:</p> 
          <button class="show-more-btn mb-4 mt-1 text-slate-100 hover:underline">Show More</button>
          </section>
        <div class="reviews h-72 flex flex-col gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content mb-6">
          
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
                } shadow-slate-300/50 shadow-md border border-slate-300 mb-4 p-1.5 text-lg tracking-wide leading-relaxed text-pretty bg-slate-700  rounded">
                  <section class="flex gap-x-2.5 place-items-center justify-between">      
                  <aside class="flex gap-x-1.5">  
                  <img
                      class="bg-center h-8 w-8 rounded-full"
                      src="${authorAvatar}"
                      alt="${review.author}"
                    />
                    <h2 class="font-bold">  ${review.author}:</h2>
                    </aside>
                    ${authorRating}
                  </section>
                  <p class="leading-snug mt-3 text-pretty text-slate-200 break-words">${
                    review.content
                  }</p>
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
