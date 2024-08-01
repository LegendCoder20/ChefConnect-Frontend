import React from "react";
import Navbar from "../Navbar";

function AddRecipe() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="max-w-sm mx-auto">
        <h1 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Recipe
        </h1>
        <div class="mb-5 mt-2">
          <label
            for="username-success"
            class="block mb-2 text-sm font-medium text-green-700"
          >
            Dish Name
          </label>
          <input
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-green-900  placeholder-green-700  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="username-success"
            class="block mb-2 text-sm font-medium text-green-700"
          >
            Description
          </label>
          <input
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-green-900  placeholder-green-700  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="username-success"
            class="block mb-2 text-sm font-medium text-green-700"
          >
            Category
          </label>
          <input
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-green-900  placeholder-green-700  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="username-success"
            class="block mb-2 text-sm font-medium text-green-700"
          >
            Recipe
          </label>
          <input
            type="text"
            id="username-success"
            class="bg-green-50 border border-green-500 text-green-900  placeholder-green-700  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-green-500"
          />
        </div>

        <form class="max-w-lg mx-auto">
          <label
            class="block mb-1 text-sm font-medium text-green-700 "
            for="user_avatar"
          >
            Upload file
          </label>
          <input
            class="block w-full  border bg-green-50  border-green-500 text-green-900  placeholder-green-700  text-sm rounded-lg focus:ring-green-500 focus:border-green-500    dark:border-green-500"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
        </form>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Recipe
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddRecipe;
