import React, {useEffect, useState} from "react";
import axios from "axios";

function useFetchCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let API_URL = "https://chefconnect-backend.onrender.com/api/recipes/";
    const fetchCategories = async () => {
      const response = await axios.get(API_URL);

      const uniqueCategories = [
        ...new Set(response.data.recipes.map((recipe) => recipe.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  return categories;
}

export default useFetchCategories;
