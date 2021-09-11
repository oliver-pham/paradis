import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavCard from './NavCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "5vmin",
    paddingBottom: "5vmin",
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  const categories = [
    {
      imageUrl: "https://bit.ly/3tgDaFO",
      text: "Comfortable stays",
    },
    {
      imageUrl: "https://bit.ly/3nMZ96u",
      text: "Exclusive experience",
    },
    {
      imageUrl: "https://bit.ly/3nHY0wV",
      text: "Entire homes",
    },
  ];

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {categories.map((category, index) => (
            <Grid key={index} item>
              <NavCard 
                className={classes.paper} 
                imageUrl={category.imageUrl}
                text={category.text}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
