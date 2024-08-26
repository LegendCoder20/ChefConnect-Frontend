// Utility function to capitalize the first letter of each word
export const capitalizeFirstLetterOfEachWordRecipe = (str) => {
  if (typeof str !== "string") {
    return [];
  }

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
