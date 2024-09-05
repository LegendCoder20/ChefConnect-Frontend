import React, {useState, useEffect} from "react";
import "../../../styles/card.css";
import {Link} from "react-router-dom";
import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";
import {capitalizeFirstLetterOfEachWord} from "../../utils/capitalizeAll";
import axios from "axios";

function OwnerPanel() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = "https://chefconnect-backend.onrender.com/api/recipes";
      try {
        const response = await axios.get(API_URL);
        setAllRecipes(response.data.recipes);
      } catch (err) {
        console.log("Some error occurred from frontend", err);
      }
    };

    fetchData();
  }, []);

  const deleteRecipe = async (recipeId) => {
    const API_URL = `https://chefconnect-backend.onrender.com/api/admin/${recipeId}`;
    try {
      await axios.delete(API_URL);
      setAllRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe._id !== recipeId)
      );
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);
    } catch (err) {
      console.log("Failed to delete recipe", err);
    }
  };

  const truncateText = (text, length) => {
    if (typeof text !== "string") return "";
    return text.length <= length ? text : text.slice(0, length) + "...";
  };

  const hSearchRecipeName = (e) => {
    setSearchRecipe(e.target.value);
  };

  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.dishName.toLowerCase().includes(searchRecipe.toLowerCase()) ||
      recipe.user.username.toLowerCase().includes(searchRecipe.toLowerCase())
  );

  return (
    <React.Fragment>
      <Navbar />
      <HeaderTitle />
      <div className="text-center h-18 text-5xl font-serif oregano-regular">
        <div className="h-26 w-full bg-gray-100 flex flex-wrap justify-end items-center p-4">
          <h1 className="w-full sm:w-80 text-4xl sm:text-6xl text-center mb-4 sm:mb-0">
            Admin Panel
          </h1>
          <div className="w-full sm:w-4/5 max-w-lg sm:mr-2">
            <input
              type="text"
              placeholder="Search for Recipe"
              onChange={hSearchRecipeName}
              className="w-full sm:w-[450px] pl-10 sm:pl-16 h-10 text-lg sm:text-2xl border-2 border-gray-200 shadow-sm bg-white text-black rounded focus:outline-none bg-no-repeat bg-[url('https://www.nicepng.com/png/detail/5-55201_search-icon-png-grey.png')] bg-[length:20px] bg-[position:10px_center] sm:bg-[position:20px_center]"
            />
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed bottom-4 right-4 z-[1000]">
          <div
            id="toast-simple"
            className="flex items-center w-full max-w-xs p-4 space-x-4 bg-green-500 text-white divide-x divide-green-600 rounded-lg shadow-lg"
            role="alert"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div className="ps-4 text-sm font-normal">
              Recipe Deleted Successfully
            </div>
          </div>
        </div>
      )}

      {/* Recipe Cards */}
      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div
                  key={recipe._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                >
                  <div className="relative">
                    <img
                      src={recipe.image.url}
                      className="w-full h-48 object-cover"
                      alt={recipe.dishName}
                    />
                    <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold bg-gradient-to-r from-black via-transparent to-transparent p-2 rounded-lg">
                      {capitalizeFirstLetterOfEachWord(recipe.dishName)}
                    </h1>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm font-medium  h-10">
                      {truncateText(recipe.description, 60)}
                    </p>
                  </div>

                  <div className="px-4 pb-2 text-right text-gray-600 font-bold italic text-sm">
                    - {capitalizeFirstLetterOfEachWord(recipe.user.username)}
                  </div>
                  <div className="flex justify-around p-4">
                    <button
                      type="button"
                      className="bg-gradient-to-r  from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors "
                      onClick={() => deleteRecipe(recipe._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center p-4 text-xl text-gray-600">
                <b>"{searchRecipe}"</b> No Such Recipe Found
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OwnerPanel;
