import React, {useState} from "react";
import Navbar from "../Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import AddRecipeDropDownList from "../Small Components/AddRecipeDropDownList";

function AddRecipe() {
  const nav = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const url = "http://localhost:5000/api/users/recipe/addrecipe";

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    const formData = new FormData(e.target);

    const recipeData = {
      dishName: formData.get("dishName"),
      description: formData.get("description"),
      recipe: formData.get("recipe"),
      category: selectedCategory,
      image: formData.get("image"),
    };

    const token = localStorage.getItem("Admin");

    try {
      setIsSubmitting(true);
      const response = await axios.post(url, recipeData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Recipe Added");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);

      nav("/userPanel");
    } catch (error) {
      console.error(
        "Error adding recipe:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDropdownSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-sm mx-auto p-2">
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
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
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
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <AddRecipeDropDownList onSelect={handleDropdownSelect} />
          </div>

          <div>
            <label
              htmlFor="recipe"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Recipe
            </label>
            <textarea
              name="recipe"
              id="recipe"
              placeholder="eg- Add Water, Add Salt, Boil"
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 resize-none"
              rows="4"
              required
            />{" "}
            <div
              id="toast-success"
              className="flex items-center w-full max-w-sm p-4 mb-4 text-black bg-white rounded-lg shadow"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">
                Please Add Comma " <b className="text-3xl">‚</b> " After Each
                Step.
                <br />
                (Adding Comma " <b className="text-lg">‚</b> " will Divide your
                Recipe into Steps.)
              </div>
            </div>
          </div>
          {/*  */}

          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-green-700"
            >
              Upload file
            </label>
            <input
              className="block w-full border bg-green-50 border-green-500 text-black placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
              id="image"
              type="file"
              name="image"
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding Recipe..." : "Add Recipe"}
          </button>
        </form>

        {/* Toast notification */}

        {toastVisible && (
          <div className="fixed bottom-4 right-4 z-[1000] transform transition-all duration-500 ease-in-out opacity-100">
            <div
              className="flex items-center w-full max-w-xs p-2 space-x-3 bg-gradient-to-r from-green-500 via-green-500 to-green-500 border border-green-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              role="alert"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <svg
                  className="w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="pl-2 text-sm font-medium">
                Recipe Added Successfully!
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default AddRecipe;
