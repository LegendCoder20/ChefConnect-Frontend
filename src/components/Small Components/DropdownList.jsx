import React from "react";
import useFetchCategories from "../../utils/fetchCategories";
import {capitalizeFirstLetterOfEachWord} from "../../utils/capitalizeAll";

//  Dropdown list for Primary Card Component

function DropdownList({onSelect}) {
  const categories = useFetchCategories();

  const handleSelection = (e) => {
    const selectedCategory = e.target.value;
    if (onSelect) {
      onSelect(selectedCategory);
    }
  };

  return (
    <React.Fragment>
      <form className="w-44 text-center mt-2">
        <label htmlFor="categories" className="block mb-2 text-sm font-medium">
          Select Category
        </label>

        <select
          id="categories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleSelection}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {capitalizeFirstLetterOfEachWord(category)}
            </option>
          ))}
        </select>
      </form>
    </React.Fragment>
  );
}

export default DropdownList;
