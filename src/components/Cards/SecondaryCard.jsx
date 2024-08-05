import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";
import "../../../styles/card.css";

// // for Breaking Description
// For Breaking Description
const truncateText = (text, length) => {
  if (typeof text !== "string") return ""; // Return empty string if text is not a string
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};

function SecondaryCard() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = "http://localhost:5000/api/recipes";
        const response = await axios.get(API_URL);
        console.log(response.data.recipes);
        setAllRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // For Capitalizing the DishName
  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <HeaderTitle></HeaderTitle>
      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl  ">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-6 ">
            {/* ////////////////////////////////////////// */}

            {allRecipes.map((recipe, index) => (
              <div className="flex flex-col  " key={recipe._id}>
                <Link
                  to={`/recipeDetailPage/${recipe.user.username}/${recipe._id}`}
                >
                  <h1 className="card-title text-center font-bold p-2 drop-shadow-lg text-xl">
                    {capitalizeFirstLetterOfEachWord(recipe.dishName)}
                  </h1>
                  <div className="md:hover:opacity-60 flex flex-col h-96 lg:h-60 rounded-b-3xl rounded-t-3xl">
                    <img
                      width="840"
                      height="1200"
                      src={recipe.image.url}
                      className="object-cover self-center w-full h-96 md:w-full md:h-full"
                      alt="dishimage"
                      data-pin-nopin="true"
                      loading="eager"
                      sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                      decoding="async"
                    />
                  </div>
                  <div className="description pt-4 ">
                    {truncateText(recipe.description || "", 60)}
                    {/* {recipe.description} */}
                  </div>
                </Link>
                <div className="review-container">
                  <div className="like">
                    <LikeButton />
                  </div>
                  <div className="comment">{recipe.user.username}</div>
                  <div className="dislike">
                    <DislikeButton />
                  </div>
                </div>
              </div>
            ))}

            {/* ////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

//  LIKE BUTTON
const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setLiked(!liked);
    setCount(liked ? count + 1 : count + 1);
  };

  return (
    <button className="like__btn" onClick={handleClick}>
      <span id="icon">
        <i className={liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i>
      </span>
      <span id="count">{count}</span> Like
    </button>
  );
};

// DISLIKE BUTTON
const DislikeButton = () => {
  const [disliked, setDisliked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setDisliked(!disliked);
    setCount(disliked ? count + 1 : count + 1);
  };

  return (
    <button className="like__btn" onClick={handleClick}>
      <span id="icon">
        <i className={disliked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i>
      </span>
      <span id="count">{count}</span> Dislike
    </button>
  );
};

export default SecondaryCard;
