import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    // textAlign: 'center',
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
}));

const ActionItems = ({ product }) => {
  const classes = useStyle();
  const history = useHistory();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
  };
  const buyNow = async () => {
    let res = await payUsingPaytm({
      aount: 500,
      email: "rajat.bhatt300@gmail.com",
    });
    let info = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: res,
    };
    post(info);
  };
  return (
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} alt='detailUrl' />
      <br />
      <Button
        className={clsx(classes.button, classes.addToCart)}
        style={{ marginRight: 10 }}
        variant='contained'
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        className={clsx(classes.button, classes.buyNow)}
        variant='contained'
        onClick={() => buyNow()}
      >
        <Flash /> Buy Now
      </Button>
    </Box>
  );
};

export default ActionItems;
