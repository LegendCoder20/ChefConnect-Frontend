import React, {useState} from "react";
import "../../../styles/card.css";
import {Link} from "react-router-dom";
import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";

function SecondaryCard() {
  const cards = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_w-NpRCnX_t4ro-6LXLqPPAQA9F_VQljbQ&s",
      countryFood: "Paneer Tikka Masala",
    },
    {
      image:
        "https://i.pinimg.com/originals/2c/ca/d5/2ccad553273808b29d4b05573eb5b7cb.jpg",
      countryFood: "Hydrabadi Chicken Biryani",
    },
    {
      image:
        "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2023/03/German-Pancakes-7.jpg?resize=1360%2C2040&ssl=1",
      countryFood: "Veg Kolhapuri",
    },
    {
      image:
        "https://st4.depositphotos.com/19960896/23370/i/1600/depositphotos_233705062-stock-photo-schezwan-fried-rice-masala-popular.jpg",
      countryFood: "Chinese",
    },

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
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg",
      countryFood: "French",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
      countryFood: "American",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
      countryFood: "American",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg",
      countryFood: "French",
    },

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
      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl  ">
          <Link to="/recipeDetailPage">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-6 ">
              {/* ////////////////////////////////////////// */}
              {cards.map((card, index) => (
                <div key={index} className="  overflow-hidden  ">
                  <h1 className="card-title text-center font-bold  p-2 drop-shadow-lg  text-xl ">
                    {capitalizeFirstLetterOfEachWord(card.countryFood)}
                  </h1>

                  <a
                    className=" md:hover:opacity-60 flex flex-col h-96 lg:h-60 rounded-b-3xl  rounded-t-3xl"
                    href=""
                  >
                    <img
                      width="840"
                      height="1200"
                      src={card.image}
                      className="object-cover self-center w-full h-96 md:w-full md:h-full "
                      alt="dishimage"
                      data-pin-nopin="true"
                      loading="eager"
                      sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                      decoding="async"
                    />
                  </a>
                  <div className="description pt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae accusamus temporibus consequuntur aliquid magni
                    excepturi quo adipisci placeat ratione, soluta libero
                    dolorem
                  </div>
                  <div className="review-container">
                    <div className="like">
                      <LikeButton></LikeButton>
                    </div>
                    <div className="comment">Comment</div>
                    <div className="dislike">
                      <DislikeButton></DislikeButton>
                    </div>
                  </div>
                </div>
              ))}

              {/* ////////////////////////////////////////// */}
            </div>
          </Link>
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
