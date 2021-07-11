import React from "react";

import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyle = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0;",
    cursor: "pointer",
    fontWeight: 600,
    padding: "5px 40px",
    textTransform: "none",
    borderRadius: 2,
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },
  container: {
    display: "flex",
  },
});
const CustomButtons = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Link>
        <Button variant='contained' className={classes.login}>
          Login
        </Button>
      </Link>
      <Link>
        <Typography
          style={{ marginTop: "5px", fontWeight: "550", fontSize: "16px" }}
        >
          More
        </Typography>
      </Link>
      <Link to='/cart' className={classes.container}>
        <Badge badgeContent={4} color='error'>
          <ShoppingCart />
        </Badge>

        <Typography
          style={{ marginLeft: "10px", fontWeight: "550", fontSize: "16px" }}
        >
          {" "}
          Cart
        </Typography>
      </Link>
    </Box>
  );
};

export default CustomButtons;
