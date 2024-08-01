// reviews.js
import noActorImage from "../../../img/movieChairs_HoldTheButter.webp";
import { API_IMAGE } from "../../config";

export function generateMarkupActor(data) {
  return `
        <section class="actor-container mb-4 mx-2 text-white md:mx-2 xl:mx-8">
              <ul class="container">
              <p class="mb-2 text-lg tracking-wider font-semibold text-slate-100">Cast:</p>
                <li
                  class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                >
                  ${data.credits
                    .map((result) => {
                      const isActorImage = result.actorImg
                        ? `${API_IMAGE}${result.actorImg}`
                        : noActorImage;
                      return `
                  <section class="flex flex-col">
                    <img
                      class="mx-1 my-2 bg-center rounded-full max-w-32 max-h-32 hover:shadow-lg hover:shadow-slate-600 hover:scale-105 hover:border hover:border-slate-800"
                      src="${isActorImage}"
                      alt="${result.actorName}"
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
  `;
}
