import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const register = async (adminData) => {
  const response = await axios.post(API_URL + "register", adminData);
  if (response.data) {
    localStorage.setItem("Admin", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (adminData) => {
  const response = await axios.post(API_URL + "login", adminData);
  if (response.data) {
    localStorage.setItem("Admin", JSON.stringify(response.data));
  }
  return response.data;
};

const adminService = {
  register,
  login,
};

export default adminService;
