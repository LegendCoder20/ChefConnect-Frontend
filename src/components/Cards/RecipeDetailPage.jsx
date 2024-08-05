import React from "react";
import Navbar from "../Navbar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import axios from "axios";

function RecipeDetailPage() {
  const [recipe, setRecipe] = useState("");
  const {username, recipeId} = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      console.log(recipeId);
      console.log(username);

      const API_URL = `http://localhost:5000/api/recipes/recipe/${recipeId}`;
      const response = await axios.get(API_URL);
      setRecipe(response.data.recipe);
      console.log(response);
    };
    fetchRecipe();
  }, [recipeId]);

  const imageUrl = recipe.image?.url || recipe.dishName;

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-[530px]  hidden dark:block"
                src={imageUrl}
                alt=""
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {recipe.category}
                <br />
                <br />
                {recipe.dishName}
              </p>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-xl ">
                  - {username}
                </h1>
              </div>
              <hr className="my-4 md:my-4 border-gray-200 dark:border-gray-800" />
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                <h1 className="sm:text-md font-bold text-black ">
                  Description
                </h1>
                <br />
                {recipe.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <h1 className="sm:text-md font-bold text-black ">
                  Recipe Steps
                </h1>
                <br />
                {recipe.recipe}
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default RecipeDetailPage;
