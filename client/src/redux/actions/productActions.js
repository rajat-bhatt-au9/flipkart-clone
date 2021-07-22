import axios from "axios";

import * as action from "../constants/productConstant";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({
      type: action.GET_PRODUCT_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: action.GET_PRODUCT_FAIL,
      payload: error.response,
    });
    console.log("Error while cal;ling product api");
  }
};
