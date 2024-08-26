import React, {useState, useEffect} from "react";
import "../../../styles/card.css";
import {Link} from "react-router-dom";
import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";
import {capitalizeFirstLetterOfEachWord} from "../../utils/capitalizeAll";
import axios from "axios";

function AdminPanelCards() {
  const [adminRecipe, setAdminRecipe] = useState([]);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL =
        "https://chefconnect-backend.onrender.com//api/users/recipe/";
      const token = localStorage.getItem("Admin");
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdminRecipe(response.data.recipes);
      } catch (err) {
        console.log("Some error occurred from frontend", err);
      }
    };

    fetchData();
  }, []);

  const deleteRecipe = async (recipeId) => {
    const API_URL = `https://chefconnect-backend.onrender.com//api/users/recipe/${recipeId}`;
    const token = localStorage.getItem("Admin");
    try {
      const response = await axios.delete(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setToastVisible(true);
      setAdminRecipe(response.data.recipes);
      setTimeout(() => setToastVisible(false), 2500);
    } catch (err) {
      console.log("Failed to delete recipe", err);
    }
  };

  const truncateText = (text, length) => {
    if (typeof text !== "string") return "";
    return text.length <= length ? text : text.slice(0, length) + "...";
  };

  return (
    <React.Fragment>
      <Navbar />
      <HeaderTitle />

      {/* Add Recipe Button */}
      <div className="add-recipe-btn text-center pt-6 bg-lightest-grey">
        <Link to="/addRecipe">
          <button
            type="button"
            className="focus:outline-none text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 transition-all duration-300"
          >
            Add Recipe
          </button>
        </Link>
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
            {adminRecipe.map((recipe) => (
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
                <div className="flex justify-around p-4">
                  <Link to={`/updateRecipe/${recipe._id}`}>
                    <button
                      type="button"
                      className="bg-gradient-to-r  from-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors "
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="bg-gradient-to-r  from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors "
                    onClick={() => deleteRecipe(recipe._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminPanelCards;
