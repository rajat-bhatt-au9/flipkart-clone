import * as actionTypes from "../constants/cartConstant";
import axios from "axios";

const URL = "http://localhost:8000";
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });

    //localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log("Error while calling cart API");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  console.log(id);
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  //localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
