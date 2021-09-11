import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SearchBar from "./SearchBar";
import Banner from './banner.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "60% 80%",
    backgroundSize: "100% auto",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000000",
    opacity: 0.5,
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  searchBar: {
    position: "absolute",
    top: "45%",
    left: "20%",
    zIndex: 3,
  }
}));

export default function PromoBanner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.overlay}></div>
      <Container className={classes.searchBar} maxWidth='lg'>
        <SearchBar />
      </Container>
    </Box>
  );
}
