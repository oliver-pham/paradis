import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "2vmax 1vmax"
    },
}));

export default function Footer() {
    const classes = useStyles();
    const columns = [
      {
        heading: "ABOUT",
        items: ["How Domum works", "Newsroom", "Investors"],
      },
      {
        heading: "COMMUNITY",
        items: ["Diversity & Belonging", "Accessibility", "Airbnb Associates"],
      },
      {
        heading: "HOST",
        items: [
          "Host your home",
          "Host an Online Experience",
          "Host an Experience",
        ],
      },
      {
        heading: "SUPPORT",
        items: ["Our COVID-19 Response", "Help Centre", "Cancellation options"],
      },
    ];

    return (
      <Box className={classes.footer} mt={8}>
        <Container component='main'>
          <Grid container spacing={2}>
            {columns.map((column) => (
              <Grid item key={column.heading} xs={3}>
                <Typography variant='subtitle1' component='h3'>
                  <strong>{column.heading}</strong>
                </Typography>
                <List component='nav' aria-label='secondary mailbox folders'>
                  {column.items.map((item) => (
                    <Link href='#' color="inherit">
                      <ListItemText key={item} primary={item} />
                    </Link>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid><br /><br />
          <Typography variant='body2' align='center'>
            {"Copyright © "}
            {/* TODO: Replace `href` with URL to my blog */}
            <Link color='inherit' href='https://material-ui.com/'>
              Oliver Pham
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    );
}
