// import View from "./View";
// import { API_IMAGE } from "../config";
// import noImage from "../../img/spilledPopcornHoldTheButter.webp";

// class MovieView extends View {
//   _parentElement = document.querySelector(".movieView");
//   _errorMessage = "Could not find that movie. <br> Please try another one.";
//   _message = "";

//   addHandlerRender(handler) {
//     ["hashchange", "load"].forEach((ev) =>
//       window.addEventListener(ev, handler)
//     );
//   }

//   _generateMarkup() {
//     const firstReview = this._data.reviews.slice(0, 1);
//     const limitedReviews = this._data.reviews.slice(0, 5);
//     const additionalReviews = this._data.reviews.slice(5);

//     return `
//         <button class="back-button text-slate-700 m-1.5 mt-2.5 ml-2 rounded-lg border-slate-200 bg-white border-2 w-16 hidden md:flex md:justify-center">Back</button>
//     <section class="bg-slate-800 text-white">
//       <h2 class="ml-3 mr-2 pt-2.5 text-3xl font-medium tracking-wide">${
//         this._data.title
//       }</h2>
//       <p class="ml-3 mt-0.5 mr-2 pb-1 text-base tracking-wider">${
//         this._data.tagline
//       }</p>

//       <div class="xl:grid xl:grid-cols-3 xl:mx-14 xl:my-8 xl:gap-0.5">
//         <img
//           class="bg-center max-h-svh transition ease-in-out delay-500 md:max-w-72 xl:max-w-80"
//           src="${API_IMAGE}${this._data.image}"
//           alt="${this._data.title}"
//         />

//         <div class="col-span-2">
//           <p class="mt-2.5 mx-4 text-lg tracking-wide leading-relaxed text-balance xl:mt-0">
//             ${this._data.overview}
//           </p>
//           <p class="ml-4 mt-4 text-lg tracking-wider">
//             ${this._data.releaseDate}
//           </p>
//           <p class="ml-4 mb-4 pb-4 text-lg tracking-wider">
//             ${this._data.runtime} minutes
//           </p>

//           <section class="videos ml-4 mb-4 ">
//             <h3 class="text-lg tracking-wider">Videos:</h3>
//                <ul class="container">
//                   <li
//                     class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
//                   >
//                     ${this._data.videos
//                       .map(
//                         (video) => `<iframe
//                       class="mt-2 mb-2 mx-0.5 aspect-video snap-always snap-center"
//                       src="https://www.youtube.com/embed/${video.key}"
//                       frameborder="0"
//                       allowfullscreen
//                     ></iframe
//                     >`
//                       )
//                       .join("")}
//                   </li>
//     </ul>
//           </section>
//           ${this._generateMarkupReview()}

//         </div>
//       </div>
//     </section>
//     `;
//   }

//   _generateMarkupReview() {
//     return `
//      <div class="overscroll-none ">
//             <div class="reviews">
//               <p class="ml-4 mb-2 text-lg tracking-wider">Reviews:</p>
//               ${this._data.reviews
//                 .map(
//                   (review, index) => `
//                     <section class="review ${
//                       index > 0 ? "hidden" : ""
//                     } mx-4 mb-4 p-1.5 text-lg tracking-wide leading-relaxed text-balance bg-slate-700 rounded">

//                     <section class="flex gap-x-2.5 items-center ">

//                     <img
//           class="bg-center h-8 w-8 rounded-full"
//           src="${API_IMAGE}${review.authorAvatar}"
//           alt="${review.author}"
//         />
//                             <h2>${review.author}:</h2>
//                                 <p> <sup>${
//                                   review.authorRating
//                                 } </sup>&frasl;<sub>10</sub>  &#x2b50;</p>
//                             </section>
//                             <p class="leading-snug mt-3">${review.content}</p>
//                     </section>
//                   `
//                 )
//                 .join("")}
//               <button class="show-more-btn ml-4 mb-4 text-blue-500 hover:underline">Show More</button>
//             </div>
//           </div>
//           `;
//   }

//   addHandlerBack(handler) {
//     this._parentElement.addEventListener("click", function (e) {
//       const btn = e.target.closest(".back-button");
//       if (!btn) return;
//       handler();
//     });
//   }

//   addHandlerShowMore() {
//     this._parentElement.addEventListener("click", function (e) {
//       const btn = e.target.closest(".show-more-btn");
//       if (!btn) return;

//       const hiddenReviews = document.querySelectorAll(".review.hidden");
//       const visibleReviews = document.querySelectorAll(".review:not(.hidden)");

//       if (btn.textContent === "Show More") {
//         hiddenReviews.forEach((review) => {
//           review.classList.remove("hidden");
//         });
//         btn.textContent = "Show Less";
//       } else {
//         visibleReviews.forEach((review, index) => {
//           if (index > 0) review.classList.add("hidden");
//         });
//         btn.textContent = "Show More";
//       }
//     });
//   }
// }

// export default new MovieView();

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
      <button class="back-button text-slate-700 m-1.5 mt-2.5 ml-2 rounded-lg border-slate-200 bg-white border-2 w-16 hidden md:flex md:justify-center">Back</button>
      <section class="bg-slate-800 text-white">
        <h2 class="ml-3 mr-2 pt-2.5 text-3xl font-medium tracking-wide">${
          this._data.title
        }</h2>
        <p class="ml-3 mt-0.5 mr-2 pb-1 text-base tracking-wider">${
          this._data.tagline
        }</p>
      
        <div class="xl:grid xl:grid-cols-3 xl:mx-14 xl:my-8 xl:gap-0.5">
          <img
            class="bg-center max-h-svh transition ease-in-out delay-500 md:max-w-72 xl:max-w-80"
            src="${API_IMAGE}${this._data.image}"
            alt="${this._data.title}"
          />
       
          <div class="col-span-2">
            <p class="mt-2.5 mx-4 text-lg tracking-wide leading-relaxed text-balance xl:mt-0">
              ${this._data.overview}
            </p>
            <p class="ml-4 mt-4 text-lg tracking-wider">
              ${this._data.releaseDate}
            </p>
            <p class="ml-4 mb-4 pb-4 text-lg tracking-wider">
              ${this._data.runtime} minutes
            </p>

            <section class="videos ml-4 mb-4 ">
              <h3 class="text-lg tracking-wider">Videos:</h3>
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
      <div class="overscroll-none ">
        <div class="reviews">
          <p class="ml-4 mb-2 text-lg tracking-wider">Reviews:</p>
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
                } mx-4 mb-4 p-1.5 text-lg tracking-wide leading-relaxed text-balance bg-slate-700 rounded">
                  <section class="flex gap-x-2.5 items-center ">      
                    <img
                      class="bg-center h-8 w-8 rounded-full"
                      src="${authorAvatar}"
                      alt="${review.author}"
                    />
                    <h2>${review.author}:</h2>
                    ${authorRating}
                  </section>
                  <p class="leading-snug mt-3">${review.content}</p>
                </section>
              `;
            })
            .join("")}
          <button class="show-more-btn ml-4 mb-4 text-blue-500 hover:underline">Show More</button>
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
        });
        btn.textContent = "Show Less";
      } else {
        visibleReviews.forEach((review, index) => {
          if (index > 0) review.classList.add("hidden");
        });
        btn.textContent = "Show More";
      }
    });
  }
}

export default new MovieView();
