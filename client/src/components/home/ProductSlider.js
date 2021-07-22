import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";

import {
  Box,
  makeStyles,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles({
  image: {
    height: 150,
  },

  component: {
    marginTop: 12,
    background: "#fff",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,

    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    fontSize: 16,
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    color: "#fff",
    borderRadius: 2,
    fontSize: 13,
  },

  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "25px 15px",
  },
});

const ProductSlider = ({ timer, title, products }) => {
  const classes = useStyles();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {" "}
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <>
            <img src={timerURL} alt='timerURL' style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </>
        )}
        <Button variant='contained' className={classes.button}>
          View More
        </Button>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
      >
        {products.length === 0 ? (
          <CircularProgress disableShrink />
        ) : (
          products.map((product) => (
            <Box textAlign='center' className={classes.wrapper}>
              <img
                src={product.url}
                key={product.id}
                alt=''
                className={classes.image}
              />
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ color: "green" }}>
                {product.discount}
              </Typography>
              <Typography
                className={classes.text}
                style={{ color: "#212121", opacity: "0.6" }}
              >
                {product.tagline}
              </Typography>
            </Box>
          ))
        )}
      </Carousel>
    </Box>
  );
};

export default ProductSlider;
