import {capitalizeFirstLetterOfEachWordRecipe} from "./capitalizeRecipe.js";

export const divideRecipeWithComma = (str) => {
  if (typeof str !== "string") {
    return [];
  }

  let recipeArr = str.split(",").map((word) => word.trim());

  return recipeArr.map((word, index) => {
    return `Step ${index + 1} - ${capitalizeFirstLetterOfEachWordRecipe(word)}`;
  });
};
