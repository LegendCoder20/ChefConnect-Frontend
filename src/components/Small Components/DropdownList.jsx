import React from "react";

function DropdownList() {
  return (
    <React.Fragment>
      <form class="w-44  text-center mt-2   ">
        <label for="countries" class="block mb-2 text-sm font-medium  ">
          Select Category
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Indian</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </form>
    </React.Fragment>
  );
}

export default DropdownList;
