import React, {useState, useEffect} from "react";
import axios from "axios";

function DislikeButton({recipeId, dislikeCount, setError, updateCounts}) {
  const [disliked, setDisliked] = useState(false);
  const [count, setCount] = useState(dislikeCount);

  useEffect(() => {
    // console.log(updateCounts, "dislike");

    const checkIfDisliked = async () => {
      try {
        const token = localStorage.getItem("Admin");
        if (!token) {
          return;
        }
        const response = await axios.get(
          `https://chefconnect-backend.onrender.com/api/users/recipe/dislike/${recipeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDisliked(response.data.disliked);
        setCount(response.data.dislikeCount);
      } catch (err) {
        console.error(
          "Error Checking If Recipe Disliked -> from Frontend",
          err
        );
        setError("Error checking dislike status.");
      }
    };

    checkIfDisliked();
  }, [recipeId, setError, dislikeCount, count]);

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("Admin");
      if (!token) {
        setError("Please Login to Dislike the Recipe Post.");
        return;
      }
      const response = await axios.put(
        `https://chefconnect-backend.onrender.com/api/users/recipe/dislike/${recipeId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setDisliked(!disliked);
        setCount(response.data.dislikeCount);
        updateCounts(response.data.likesCount, response.data.dislikeCount);
        console.log(
          "dislike",
          response.data.likesCount,
          response.data.dislikeCount
        );
      } else {
        console.error("Unexpected response status:", response.status);
        setError("Unexpected error occurred.");
      }
    } catch (err) {
      window.location.reload();
      setError("You Already Disliked this Recipe Post.");
    }
  };

  return (
    <button
      className={`flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 ${
        disliked
          ? "bg-gradient-to-r  from-blue-500 to-blue-700"
          : "bg-gradient-to-r from-blue-500 to-blue-700"
      } hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`}
      onClick={handleClick}
    >
      <span id="count" className="pr-2">
        {count}
      </span>
      Dislike
    </button>
  );
}

export default DislikeButton;
