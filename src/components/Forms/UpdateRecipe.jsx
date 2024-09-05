import React, {useState, useEffect} from "react";
import Navbar from "../Navbar";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import AddRecipeDropDownList from "../Small Components/AddRecipeDropDownList";

function UpdateRecipe() {
  const nav = useNavigate();
  const {recipeId} = useParams();
  const [toastVisible, setToastVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recipe, setRecipe] = useState({
    dishName: "",
    description: "",
    recipe: "",
    category: "",
  });
  const [recipeImage, setRecipeImage] = useState("");

  // GET RECIPE

  useEffect(() => {
    const fetchRecipe = async () => {
      const API_URL = `https://chefconnect-backend.onrender.com/api/recipes/recipe/${recipeId}`;
      const token = localStorage.getItem("Admin");
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data.recipe);

        setRecipe(response.data.recipe);
        setRecipeImage(response.data.recipe.image.url);
      } catch (err) {
        console.log("Some error occurred from frontend", err);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  //  UPDATE RECIPE

  const handleUpdateRecipe = async (e) => {
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
    };

    const token = localStorage.getItem("Admin");
    const API_URL = `https://chefconnect-backend.onrender.com/api/users/recipe/update/${recipeId}`;

    try {
      setIsSubmitting(true);
      const response = await axios.patch(API_URL, recipeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Recipe Updated");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);
      nav("/userPanel");
    } catch (err) {
      console.error(
        "Error adding recipe:",
        err.response ? err.response.data : err.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDropdownSelect = (category) => {
    setSelectedCategory(category);
  };

  {
    return (
      <React.Fragment>
        <Navbar />
        <div className="max-w-sm mx-auto p-2">
          <h1 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Update Recipe
          </h1>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 mt-4">
            <img class="rounded-t-lg w-full h-52" src={recipeImage} alt="" />
          </div>
          <form onSubmit={handleUpdateRecipe} className="space-y-5">
            <div>
              <label
                htmlFor="dishName"
                className="block mb-2 text-sm font-medium text-yellow-700"
              >
                Dish Name
              </label>
              <input
                type="text"
                name="dishName"
                id="dishName"
                className="bg-yellow-50 border border-yellow-500 text-black placeholder-yellow-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                value={recipe.dishName}
                onChange={(e) =>
                  setRecipe({...recipe, dishName: e.target.value})
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-yellow-700"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="bg-yellow-50 border border-yellow-500 text-black placeholder-yellow-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                value={recipe.description}
                onChange={(e) => {
                  setRecipe({...recipe, description: e.target.value});
                }}
                required
              />
            </div>
            <div rewquired>
              <AddRecipeDropDownList onSelect={handleDropdownSelect} />
            </div>

            <div>
              <label
                htmlFor="recipe"
                className="block mb-2 text-sm font-medium text-yellow-700"
              >
                Recipe
              </label>
              <textarea
                name="recipe"
                id="recipe"
                placeholder="eg- Add Water, Add Salt, Boil"
                className="bg-yellow-50 border border-yellow-500 text-black placeholder-yellow-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 resize-none"
                rows="4"
                value={recipe.recipe}
                onChange={(e) => {
                  setRecipe({...recipe, recipe: e.target.value});
                }}
                required
              />
              <div
                id="toast-success"
                className="flex items-center w-full max-w-sm p-4 mb-4 text-black bg-white rounded-lg shadow"
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg">
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
                  (Adding Comma " <b className="text-lg">‚</b> " will Divide
                  your Recipe into Steps.)
                </div>
              </div>
            </div>
            {/*  */}

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gradient-to-r  from-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700  mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating Recipe..." : "Update Recipe"}
            </button>
          </form>

          {/* Toast notification */}

          {toastVisible && (
            <div className="fixed bottom-4 right-4 z-[1000] transform transition-all duration-500 ease-in-out opacity-100">
              <div
                className="flex items-center w-full max-w-xs p-2 space-x-3 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 border border-yellow-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                role="alert"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <svg
                    className="w-5 h-5 text-yellow-500"
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
                  Recipe Updated Successfully!
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateRecipe;
