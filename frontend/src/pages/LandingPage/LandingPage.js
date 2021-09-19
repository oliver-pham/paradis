import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from '../../components/Nav/Navbar';
import ListingCard from '../../components/Card/ListingCard'; 
import ListingSearch from '../../components/Search/ListingSearch';
// Dummy data
import cards from './cards.json';


function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"Copyright © Oliver Pham "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#24715C",
      contrastText: "#F6F0D6",
    },
    secondary: {
      main: "#3DB092",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default function Album() {
  return (
    <Box sx={{ flexDirection: "column", width: "100%" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>

          {/* Hero unit */}
          <Box
            sx={{
              backgroundImage: `url("/images/hero.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              pt: 30,
              pb: 30,
            }}
          >
            <ListingSearch />
          </Box>

          {/* Listing area */}
          <Container sx={{ py: 8 }} maxWidth='lg'>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Suggested Listings
            </Typography>
            <Grid container spacing={4}>
              {cards.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <ListingCard host={card.host} listing={card.listing} />
                </Grid>
              ))}
            </Grid>
          </Container>

        </main>
        
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'>
          <Copyright />
        </Box>

      </ThemeProvider>
    </Box>
  );
}