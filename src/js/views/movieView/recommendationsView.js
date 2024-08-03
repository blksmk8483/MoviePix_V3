// reviews.js
import noActorImage from "../../../img/movieChairs_HoldTheButter.webp";
import { API_IMAGE } from "../../config";

export function generateMarkupRecommendation(data) {
  return `
       <section class="recommendations-container pb-4 mx-2 text-white md:mx-2 xl:mx-8">
              <ul class="container">
               <p class="mb-2 text-lg tracking-wider font-semibold text-slate-100">Recommendations:</p>
                <li
                  class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                >
                  ${data.recommendations
                    .map((result) => {
                      const isRecImage = result.recImg
                        ? `${API_IMAGE}${result.recImg}`
                        : noActorImage;
                      return `
                  <section class="flex flex-col" data-movie-id="${result.recId}">
                    <img
                      class="mx-1 my-1 bg-center min-w-48 h-28 rounded-md snap-always snap-center hover:shadow-lg hover:shadow-slate-600 hover:scale-105 hover:border hover:border-slate-800 sm:min-w-56 sm:h-32"
                      src="${isRecImage}"
                      alt="${result.recTitle}"
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
