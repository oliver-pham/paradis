import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'green'
    },
}));

export default function Explore() {
    const classes = useStyles();

    return (
      <div>
        <Container component='main' maxWidth='lg'>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Explore page works!
            </Typography>
          </div>
        </Container>
        <Footer />
      </div>
    );
}
