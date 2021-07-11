import React from "react";

import { Box, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Banner from "./Banner";

const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
      </Box>
    </div>
  );
}

export default Home;
