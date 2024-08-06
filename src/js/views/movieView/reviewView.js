// reviews.js
import noImage from "../../../img/spilledPopcornHoldTheButter.webp";
import { API_IMAGE } from "../../config";

export function generateMarkupReview(data) {
  return `
    <div class="overscroll-none  overscroll-x-none mb-4 mx-2 text-white md:mx-2 xl:mx-8">
      <section class="flex justify-between">  
        <p class="mb-2 text-lg tracking-wider font-semibold text-slate-200">Reviews:</p> 
        <button class="show-more-btn mb-4 mt-1 text-slate-100 hover:underline">Show More</button>
      </section>
      <div class="reviews h-28 flex flex-col gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content mb-6">
        ${data.reviews
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
              } shadow-slate-300/50 shadow-md border border-slate-300 mb-4 p-1.5 text-lg tracking-wide leading-relaxed text-pretty bg-slate-700 rounded">
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
                <p class="leading-snug mt-3 text-pretty text-slate-200 break-words">
                  ${review.content}
                </p>
              </section>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

// export function addHandlerShowMore(parentElement) {
//   parentElement.addEventListener("click", function (e) {
//     const btn = e.target.closest(".show-more-btn");
//     if (!btn) return;

//     const hiddenReviews = document.querySelectorAll(".review.hidden");
//     const visibleReviews = document.querySelectorAll(".review:not(.hidden)");

//     if (btn.textContent === "Show More") {
//       hiddenReviews.forEach((review) => {
//         review.classList.remove("hidden");
//         document
//           .querySelector(".reviews")
//           .setAttribute("style", "height: 18rem;");
//       });
//       btn.textContent = "Show Less";
//     } else {
//       visibleReviews.forEach((review, index) => {
//         if (index > 0) review.classList.add("hidden");
//       });
//       btn.textContent = "Show More";
//       document
//         .querySelector(".reviews")
//         .setAttribute("style", "height: 18rem;");
//     }
//   });
// }

export function addHandlerShowMore(parentElement) {
  parentElement.addEventListener("click", function (e) {
    const btn = e.target.closest(".show-more-btn");
    if (!btn) return;

    if (btn.textContent === "Show More") {
      const bobs = document.querySelector(".reviewPage");

      const yourUncle = window.open(bobs, "_parent");
      yourUncle.focus();
    }
  });
}
