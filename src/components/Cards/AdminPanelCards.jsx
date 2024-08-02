import React, {useState, useEffect} from "react";
import "../../../styles/card.css";
import {Link} from "react-router-dom";
import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";

function AdminPanelCards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
      countryFood: "Italian",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
      countryFood: "American BBQ",
    },
  ];

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

      {/* Add Recipe Button */}
      <Link to="/addRecipe">
        <div className="add-recipe-btn text-center pt-6 bg-lightest-grey">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Recipe
          </button>
        </div>
      </Link>
      {/* Add Recipe Button */}

      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl  ">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-6 ">
            {/* ////////////////////////////////////////// */}
            {cards.map((card, index) => (
              <div className="overflow-hidden " key={index}>
                <h1 className="card-title text-center font-bold p-2 drop-shadow-lg text-xl">
                  {capitalizeFirstLetterOfEachWord(card.countryFood)}
                </h1>
                <div className="md:hover:opacity-60 flex flex-col h-96 lg:h-60 rounded-b-3xl rounded-t-3xl">
                  <img
                    width="840"
                    height="1200"
                    src={card.image}
                    className="object-cover self-center w-full h-96 md:w-full md:h-full"
                    alt="dishimage"
                    data-pin-nopin="true"
                    loading="eager"
                    sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                    decoding="async"
                  />
                </div>
                <div className="description pt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="admin-panel-buttons flex mt-4 justify-around">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-[#f2bc0b] hover:bg-yellow-500  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
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

export default AdminPanelCards;
