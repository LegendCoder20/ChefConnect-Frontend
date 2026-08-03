import React, {useState, useEffect} from "react";
import axios from "axios";

function DislikeButton({
  recipeId,
  disliked,
  dislikeCount,
  setDislikeCount,
  setDisliked,
  setError,
}) {
  useEffect(() => {
    const checkIfDisliked = async () => {
      try {
        const token = localStorage.getItem("Admin");
        if (!token) {
          return;
        }
        const response = await axios.get(
          `http://localhost:5000/api/users/recipe/dislike/${recipeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (disliked !== response.data.disliked) {
          setDisliked(response.data.disliked);
        }

        if (dislikeCount !== response.data.dislikeCount) {
          setDislikeCount(response.data.dislikeCount);
        }
      } catch (err) {
        console.error(
          "Error Checking If Recipe Disliked -> from Frontend",
          err
        );
        setError("Error checking dislike status.");
      }
    };

    checkIfDisliked();
  }, [recipeId, setError, setDisliked, setDislikeCount]);

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("Admin");
      if (!token) {
        setError("Please Login to Dislike the Recipe Post.");
        return;
      }
      const response = await axios.put(
        `http://localhost:5000/api/users/recipe/dislike/${recipeId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setDisliked(!disliked); // Toggle the disliked state
        setDislikeCount(response.data.dislikeCount); // Update the count
      } else {
        console.error("Unexpected response status:", response.status);
        setError("Unexpected error occurred.");
      }
    } catch (err) {
      console.error("Error disliking the recipe:", err);
      setError("You Already Disliked this Recipe Post.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
        disliked
          ? "bg-gradient-to-r from-red-500 to-red-700"
          : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
      } focus:outline-none focus:ring-2 focus:ring-red-300`}
    >
      <span id="count" className="mr-2">
        {dislikeCount}
      </span>
      Dislike
    </button>
  );
}

export default DislikeButton;
