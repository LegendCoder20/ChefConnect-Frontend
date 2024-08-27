import React from "react";
import Navbar from "../Navbar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import {divideRecipeWithComma} from "../../utils/divideRecipe";
import {capitalizeFirstLetterOfEachWord} from "../../utils/capitalizeAll.js";
import {capitalizeFirstLetterOfEachWordRecipe} from "../../utils/capitalizeRecipe";

function RecipeDetailPage() {
  const [recipe, setRecipe] = useState("");
  const {username, recipeId} = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const API_URL = `http://localhost:5000/api/recipes/recipe/${recipeId}`;
      const response = await axios.get(API_URL);
      setRecipe(response.data.recipe);
    };
    fetchRecipe();
  }, [recipeId]);

  const imageUrl = recipe.image?.url || recipe.dishName;

  return (
    <React.Fragment>
      <Navbar />
      <section className="py-12  min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Recipe Image */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  className="object-cover w-full h-full"
                  src={imageUrl}
                  alt={recipe.dishName}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-3xl"></div>
                <h2 className="absolute top-8 left-8 text-3xl text-white font-bold tracking-wider shadow-lg backdrop-blur-sm p-4 rounded-lg">
                  {capitalizeFirstLetterOfEachWord(recipe.dishName)}
                </h2>
              </div>
            </div>

            {/* Recipe Details */}
            <div className="w-full lg:w-1/2 bg-white p-10 rounded-3xl shadow-2xl backdrop-blur-md">
              {/* Category Tag */}
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-medium px-5 py-2 rounded-full mb-6 tracking-wider uppercase">
                {capitalizeFirstLetterOfEachWord(recipe.category)}
              </span>

              {/* Author/Username */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recipe by{" "}
                <span className="text text-2xl font-bold">
                  {capitalizeFirstLetterOfEachWord(username)}
                </span>
              </h3>

              <hr className="my-6 border-gray-300" />

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-extrabold text-gray-800 mb-4 flex items-center">
                  Description
                </h4>
                <p className="text-gray-600 leading-loose text-lg">
                  {capitalizeFirstLetterOfEachWordRecipe(recipe.description)}
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              {/* Recipe Steps */}
              <div>
                <h4 className="text-xl font-extrabold text-gray-800 mb-4 flex items-center">
                  Recipe Steps
                </h4>
                <ul className="  space-y-3 text-gray-600 text-lg leading-relaxed">
                  {divideRecipeWithComma(recipe.recipe).map((step, index) => (
                    <li className="ml-2 "> {step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default RecipeDetailPage;
