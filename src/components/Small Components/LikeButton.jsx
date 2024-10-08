import React, {useState, useEffect} from "react";
import axios from "axios";

function LikeButton({recipeId, likesCount, setError}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likesCount);

  useEffect(() => {
    const checkIfLiked = async () => {
      try {
        const token = localStorage.getItem("Admin");
        if (!token) {
          return;
        }
        const response = await axios.get(
          `https://chefconnect-backend.onrender.com/api/users/recipe/like/${recipeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLiked(response.data.liked);
        setCount(response.data.likesCount);
      } catch (err) {
        console.error("Error Checking If Recipe Liked", err);
        setError("Error checking like status.");
      }
    };

    checkIfLiked();
  }, [recipeId, setError]);

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("Admin");
      if (!token) {
        setError("Please Login to Like the Recipe Post.");
        return;
      }
      const response = await axios.put(
        `https://chefconnect-backend.onrender.com/api/users/recipe/like/${recipeId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setLiked(!liked);
        setCount(response.data.likesCount);
      } else {
        console.error("Unexpected response status:", response.status);
        setError("Unexpected error occurred.");
      }
    } catch (err) {
      console.error("Error liking the recipe:", err);
      setError("You Already Liked this Recipe Post.");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 ${
          liked
            ? "bg-gradient-to-r from-blue-500 to-blue-700"
            : "bg-gradient-to-r from-blue-500 to-blue-700"
        } hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`}
      >
        <span id="count" className="mr-2">
          {count}
        </span>
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;
