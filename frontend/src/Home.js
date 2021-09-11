import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import PromoBanner from './PromoBanner';
import FeatureList from './FeatureList';
import Footer from './Footer';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "green",
  },
  box: {
    flexGrow: 1,
    padding: "5vmin 0",
    borderRadius: 15,
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    width: "40vmax",
  },
  text: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  about: {
    padding: "50px"
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <PromoBanner />
      <Container component='main'>
        <FeatureList />
        <Grid container className={classes.box} spacing={2}>
          <Grid item xs={6}>
            <img
              className={classes.image}
              src='https://opendoodles.s3-us-west-1.amazonaws.com/loving.svg'
              alt=''
            />
          </Grid>
          <Grid className={classes.text} item xs={6}>
            <Box className={classes.about}>
              <Typography variant='h3' component='h3'>
                Home Sweet Home
              </Typography><br />
              <Typography variant='body1' component='p'>
                Home is where the heart is, so we connect our customers to compatible accommodation providers at Domum.
              </Typography>
              <br /><br />
              <Typography variant='h3' component='h3'>
                Become a Host
              </Typography><br />
              <Typography variant='body1' component='p'>
                You can earn extra money by sharing your home, activity, or both
                with others. We connect you to qualified consumers by posting
                your listing on our platform and recommending it to others.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
