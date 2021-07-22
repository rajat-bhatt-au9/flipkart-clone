import React, { useEffect } from "react";

import { Box, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import MidSection from "./MidSection";

//import { products } from "../../constants/data";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";

const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
  rightwrapper: {
    background: "white",
    padding: 4,
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

function Home() {
  const classes = useStyles();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <ProductSlider
              timer={true}
              title='Deal of the Day'
              products={products}
            />
          </Box>
          <Box className={classes.rightwrapper}>
            <img
              src={adURL}
              alt='adURL'
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
        <MidSection />
        <ProductSlider
          timer={false}
          title='Discounts for You'
          products={products}
        />
        <ProductSlider
          timer={false}
          title='Suggested Items'
          products={products}
        />
        <ProductSlider
          timer={false}
          title='Top selections'
          products={products}
        />
        <ProductSlider
          timer={false}
          title='Recommended Items'
          products={products}
        />
        <ProductSlider timer={false} title='Best Sellers' products={products} />
      </Box>
    </div>
  );
}

export default Home;
