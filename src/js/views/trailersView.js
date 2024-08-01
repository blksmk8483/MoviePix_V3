// reviews.js
import noActorImage from "../../img/movieChairs_HoldTheButter.webp";
import { API_IMAGE } from "../config";

export function generateMarkupTrailer(data) {
  return `
       <section class="videos mb-4 mx-2 mt-4 text-white md:mx-2 xl:mx-8">
              <ul class="container">
              <p class="mb-2 text-lg tracking-wider font-semibold text-slate-100">Trailers:</p>
                <li
                  class="flex flex-row gap-0.5 overflow-y-auto snap-x snap-mandatory scrollable-content"
                >
                  ${data.videos
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
  `;
}
