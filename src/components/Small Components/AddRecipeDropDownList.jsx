import React, {useState} from "react";
import {recipeCategories} from "../../jsondata/category";
import {capitalizeFirstLetterOfEachWord} from "../../utils/capitalizeAll";

function AddRecipeDropDownList({onSelect}) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelection = (e) => {
    const category = e.target.value;
    setSelectedCategory(category); // Update local state
    if (onSelect) {
      onSelect(category); // Pass selected category to parent
    }
  };

  return (
    <React.Fragment>
      <form className="w-44 text-center mt-2">
        <label htmlFor="categories" className="block mb-2 text-sm font-medium">
          Select Category
        </label>
        <div className="relative">
          <select
            id="categories"
            className="bg-gray-50 border  border-green-500 text-black placeholder-green-700 
            required  text-sm rounded-lg  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 overflow-y-auto max-h-36"
            onChange={handleSelection}
            value={selectedCategory}
          >
            <option value="" disabled>
              Select Category
            </option>
            {recipeCategories.map((category, index) => (
              <option key={index} value={category.recipeCategory}>
                {capitalizeFirstLetterOfEachWord(category.recipeCategory)}
              </option>
            ))}
          </select>
        </div>
      </form>
    </React.Fragment>
  );
}

export default AddRecipeDropDownList;
