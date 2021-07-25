import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${URL}/signup`, user);
  } catch (err) {
    console.log("error while calling signup api", err);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${URL}/login`, user);
  } catch (err) {
    console.log("error while calling login api", err);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let res = await axios.post(`${URL}/payment`, data);
    return res.data;
  } catch (err) {
    console.log("error while calling paytm api", err);
  }
};
