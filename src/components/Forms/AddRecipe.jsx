import React from "react";
import Navbar from "../Navbar";

import axios from "axios";

function AddRecipe() {
  const url = "http://localhost:5000/api/users/recipe/addrecipe";

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const recipeData = {
      dishName: formData.get("dishName"),
      description: formData.get("description"),
      category: formData.get("category"),
      recipe: formData.get("recipe"),
      image: formData.get("image"),
    };

    const token = localStorage.getItem("Admin");
    console.log("Token Printed from Frontend:", token);

    try {
      const response = await axios.post(url, recipeData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Recipe Added");
      console.log("Response Data:", response.data);
    } catch (error) {
      console.error(
        "Error adding recipe:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-sm mx-auto">
        <h1 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Recipe
        </h1>
        <form onSubmit={handleAddRecipe} className="space-y-5">
          <div>
            <label
              htmlFor="dishName"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Dish Name
            </label>
            <input
              type="text"
              name="dishName"
              id="dishName"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="recipe"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Recipe
            </label>
            <input
              type="text"
              name="recipe"
              id="recipe"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Upload file
            </label>
            <input
              className="block w-full border bg-green-50 border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
              id="image"
              type="file"
              name="image"
              required
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddRecipe;
