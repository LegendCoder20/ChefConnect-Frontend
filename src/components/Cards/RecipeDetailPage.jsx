import React from "react";
import Navbar from "../Navbar";

function RecipeDetailPage() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section class="py-8 bg-white md:py-16 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                class="w-full hidden dark:block"
                src="https://naturallynidhi.com/wp-content/uploads/2024/01/Spicy-Peanut-Maggi-Noodles-1.jpg"
                alt=""
              />
            </div>

            <div class="mt-6 sm:mt-8 lg:mt-0">
              <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Nestle Maggi
              </p>
              <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-xl ">
                  - Aryan Manjarekar
                </h1>
              </div>

              <hr class="my-4 md:my-4 border-gray-200 dark:border-gray-800" />

              <p class="mb-6 text-gray-500 dark:text-gray-400">
                <h1 className="sm:text-md font-bold text-black ">
                  Description
                </h1>
                <br />
                Studio quality three mic array for crystal clear calls and voice
                recordings. Six-speaker sound system for a remarkably robust and
                high-quality audio experience. Up to 256GB of ultrafast SSD
                storage.
              </p>

              <p class="text-gray-500 dark:text-gray-400">
                <h1 className="sm:text-md font-bold text-black ">
                  Recipe Steps
                </h1>
                <br />
                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse
                with Magic Keyboard or Magic Keyboard with Touch ID.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default RecipeDetailPage;
