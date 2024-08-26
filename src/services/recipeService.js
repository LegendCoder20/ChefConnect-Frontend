const API_URL = "https://chefconnect-backend.onrender.com//api/users/recipe/";

const addRecipe = async (formData, token) => {
  // console.log(token, "Token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(API_URL + "addrecipe", formData, config);

    console.log("Recipe Added");
    // console.log("Got Response ", response.data);

    return response.data.recipe;
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};
