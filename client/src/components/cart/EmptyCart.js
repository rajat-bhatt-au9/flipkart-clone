import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    width: "80%%",
    height: "65vh",
    background: "#fff",
    margin: "80px 140px",

    boxShadow: "rgb(0 0 0 / 20%) 0px 1px 2px 0px",
  },
  image: {
    width: "25%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
    "& > *": {
      marginTop: 10,
      fontSize: 14,
    },
  },
  shopNow: {
    background: "#2874F0",
    color: "#fff",
    borderRadius: 2,
  },
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const classes = useStyle();
  const history = useHistory();

  const shopNow = () => {
    history.push("/");
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={imgurl} alt='imgurl' className={classes.image} />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now.</Typography>
        <Button
          variant='contained'
          onClick={() => shopNow()}
          className={classes.shopNow}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
