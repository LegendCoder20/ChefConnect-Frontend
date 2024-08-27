import React, {useState, useEffect} from "react";
import axios from "axios";

function DislikeButton({recipeId, dislikeCount, setError}) {
  const [disliked, setDisliked] = useState(false);
  const [count, setCount] = useState(dislikeCount);

  useEffect(() => {
    const checkIfDisliked = async () => {
      try {
        const token = localStorage.getItem("Admin");
        const response = await axios.get(
          `http://localhost:5000/api/users/recipe/dislike/${recipeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDisliked(response.data.disliked);
        setCount(response.data.dislikeCount);
      } catch (err) {
        console.log("Error Checking If Recipe Disliked -> from Frontend");
      }
    };

    checkIfDisliked();
  }, [recipeId]);

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("Admin");
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
        setDisliked(!disliked);
        setCount(response.data.dislikeCount);
      }
    } catch (err) {
      const token = localStorage.getItem("Admin");
      if (!token) {
        setError("Please Login to Dislike the Recipe Post.");
      } else {
        setError("You Already Disliked this Recipe Post!");
      }
    }
  };

  return (
    <button
      className="flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
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
