import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useFetchCategories from "../../utils/fetchCategories";
import "../../../styles/card.css";
import DropdownList from "../Small Components/DropdownList";
import HeaderTitle from "../Small Components/HeaderTitle";
import Navbar from "../Navbar";
import {recipeCategories} from "../../jsondata/category";

function PrimaryCard() {
  const categories = useFetchCategories();
  const navigate = useNavigate(); // For programmatic navigation

  const categoriesWithImages = recipeCategories.filter((category) =>
    categories.includes(category.recipeCategory)
  );

  // THE BELOW ONE LINE CODE IS FOR TESTING PURPOSE  ( For Viewing all Categories )
  // const categoriesWithImages = recipeCategories.filter((category) => category);

  // Function to handle category selection from the dropdown
  const handleDropdownSelect = (selectedCategory) => {
    // Navigate to the secondary page with the selected category
    navigate(`/allRecipe/${selectedCategory}`);
  };

  return (
    <React.Fragment>
      <Navbar />
      <HeaderTitle />
      <div className="flex justify-end pr-10 bg-lightest-grey">
        <DropdownList onSelect={handleDropdownSelect} />
      </div>

      <div className="bg-lightest-grey">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {/* Render the cards */}
            {categoriesWithImages.map((category, index) => (
              <div key={index} className="lg:h-96">
                <Link
                  to={`/allRecipe/${category.recipeCategory}`}
                  className="md:hover:opacity-60 flex flex-col h-96"
                  style={{height: "26rem"}}
                >
                  <img
                    width="840"
                    height="1200"
                    src={category.image}
                    className="object-cover self-center w-full h-96 md:w-full md:h-full lg:h-96"
                    alt="dishimage"
                    loading="eager"
                    sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                    decoding="async"
                  />
                  <p className="relative -mt-5 px-2 sm:px-4 py-2 mx-auto text-white bg-yellow-500 text-xl font-bold uppercase tracking-extra-widest sm:tracking-giant lg:text-base lg:px-4 lg:py-2">
                    {category.recipeCategory}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PrimaryCard;
