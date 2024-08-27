import React, {useState, useEffect} from "react";
import axios from "axios";

function LikeButton({recipeId, likesCount, setError}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likesCount);

  useEffect(() => {
    const checkIfLiked = async () => {
      try {
        const token = localStorage.getItem("Admin");
        const response = await axios.get(
          `http://localhost:5000/api/users/recipe/like/${recipeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLiked(response.data.liked);
      } catch (err) {
        console.log("Error Checking If Recipe Liked -> from Frontend");
      }
    };

    checkIfLiked();
  }, [recipeId]);

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("Admin");
      const response = await axios.put(
        `http://localhost:5000/api/users/recipe/like/${recipeId}`,
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
      }
    } catch (err) {
      const token = localStorage.getItem("Admin");
      if (!token) {
        setError("Please Login to Like the Recipe Post.");
      } else {
        setError("You Already Liked this Recipe Post!");
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
      >
        <span id="count" className="mr-2">
          {count}
        </span>
        Like
      </button>
    </div>
  );
}

export default LikeButton;
