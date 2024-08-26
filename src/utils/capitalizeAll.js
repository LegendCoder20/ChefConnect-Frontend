// Utility function to capitalize the first letter of each word
export const capitalizeFirstLetterOfEachWord = (str) => {
  if (typeof str !== "string") {
    return [];
  }
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

// let res = capitalizeFirstLetterOfEachWord("fds fdfd");
// console.log(res);

// The problem here is it is taking only one word . If its two words than its combining both
