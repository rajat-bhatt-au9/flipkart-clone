import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${URL}/signup`, user);
  } catch (error) {
    console.log("error while calling signup api");
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${URL}/login`, user);
  } catch (error) {
    console.log("error while calling login api");
  }
};
