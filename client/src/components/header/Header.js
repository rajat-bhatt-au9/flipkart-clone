import React from "react";

import SearchBar from "./SearchBar";
import CustomButtons from "./CustomButtons";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    lineHeight: 0,
    marginLeft: "12%",
  },

  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
});

const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  //to override
  const ToolBar = withStyles({
    root: {
      minHeight: 55,
    },
  })(Toolbar);
  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <Box className={classes.component}>
          <img className={classes.logo} src={logoURL} alt='logoURL' />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore <span style={{ color: "#ffe500" }}>Plus</span>
            </Typography>
            <img src={subURL} alt='subURL' className={classes.subURL} />
          </Box>
        </Box>
        <SearchBar />
        <CustomButtons />
      </ToolBar>
    </AppBar>
  );
};

export default Header;
