import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";
import "../../../styles/card.css";

import {capitalizeFirstLetterOfEachWord} from "../../utils/capitalizeAll";
import LikeButton from "../Small Components/LikeButton";
import DislikeButton from "../Small Components/DislikeButton";

const truncateText = (text, length) => {
  if (typeof text !== "string") return "";
  return text.length <= length ? text : text.slice(0, length) + "...";
};

function SecondaryCard() {
  const [allRecipes, setAllRecipes] = useState([]);
  const {category} = useParams();
  const [searchRecipe, setSearchRecipe] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [alreadyLiked, setAlreadyLiked] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = "https://chefconnect-backend.onrender.com//api/recipes";
        const response = await axios.get(API_URL);
        setAllRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const hSearchRecipeName = (e) => {
    setSearchRecipe(e.target.value);
  };

  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.category === category &&
      recipe.dishName.toLowerCase().includes(searchRecipe.toLowerCase())
  );

  const handleError = (message) => {
    setErrorMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleAlreadyLiked = () => {
    setAlreadyLiked(true);
    handleError("You Already Liked This Post!");
  };

  const handleAlreadyDisliked = () => {
    setAlreadyLiked(false);
    handleError("You Already Disliked This Post!");
  };

  return (
    <React.Fragment>
      <Navbar />
      <HeaderTitle />
      <div className="text-center h-18 text-5xl font-serif oregano-regular">
        <div className="h-26 w-full bg-gray-100 flex flex-wrap justify-end items-center p-4">
          <h1 className="w-full sm:w-80 text-4xl sm:text-6xl text-center mb-4 sm:mb-0">
            {category.toUpperCase()}
          </h1>
          <div className="w-full sm:w-4/5 max-w-lg sm:mr-2">
            <input
              type="text"
              placeholder={`Search for ${capitalizeFirstLetterOfEachWord(
                category
              )} Country Recipe... `}
              className="w-full sm:w-[450px] pl-10 sm:pl-16 h-10 text-lg sm:text-2xl border-2 border-gray-200 shadow-sm bg-white text-black rounded focus:outline-none bg-no-repeat bg-[url('https://www.nicepng.com/png/detail/5-55201_search-icon-png-grey.png')] bg-[length:20px] bg-[position:10px_center] sm:bg-[position:20px_center]"
              onChange={hSearchRecipeName}
            />
          </div>
        </div>
      </div>

      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-full">
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredRecipes.map((recipe) => (
              <div key={recipe._id}>
                <div className="flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white border border-gray-200 overflow-hidden transform hover:scale-105">
                  <div className="text-center bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 text-black font-bold p-2 rounded-t-lg">
                    <h1 className="text-lg sm:text-xl">
                      {capitalizeFirstLetterOfEachWord(recipe.dishName)}
                    </h1>
                  </div>

                  <Link
                    to={`/recipeDetailPage/${recipe.user.username}/${recipe._id}`}
                  >
                    <div className="relative h-56 md:h-52 lg:h-60 overflow-hidden">
                      <img
                        src={recipe.image.url}
                        className="w-full h-full object-cover"
                        alt="dish"
                        loading="eager"
                      />
                    </div>
                  </Link>

                  <div className="p-4 h-20 bg-gray-50">
                    <p className="text-gray-700 text-sm">
                      {truncateText(recipe.description || "", 100)}
                    </p>
                  </div>

                  <div className="px-4 pb-2 text-right text-gray-600 font-bold italic text-sm">
                    - {capitalizeFirstLetterOfEachWord(recipe.user.username)}
                  </div>

                  {/* Like and Dislike Buttons */}
                  <div className="px-4 pb-4 flex justify-between items-center">
                    <LikeButton
                      recipeId={recipe._id}
                      likesCount={recipe.likesCount}
                      onAlreadyLiked={handleAlreadyLiked}
                      setError={handleError}
                    />
                    <DislikeButton
                      recipeId={recipe._id}
                      dislikesCount={recipe.dislikesCount}
                      onAlreadyDislike={handleAlreadyDisliked}
                      setError={handleError}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Toast Notification */}
          {toastVisible && (
            <div className="fixed bottom-4 right-4 z-[1000] transform transition-all duration-500 ease-in-out opacity-100">
              <div
                className="flex items-center w-full max-w-xs p-3 space-x-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border border-blue-700 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                role="alert"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </div>
                <div className="pl-2 text-sm font-medium">
                  {errorMessage ||
                    (alreadyLiked
                      ? "You Already Liked This Post!"
                      : "You Already Disliked This Post!")}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SecondaryCard;
