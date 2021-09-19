import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";


export default function Navbar() {
    return (
      <AppBar position='sticky'>
        <Toolbar>
          <Container maxWidth='lg'>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href='#' underline='none'>
                <img width={120} height={55} src='/images/brand.png' alt='' />
              </Link>
              <Typography
                variant='h6'
                color='primary.contrastText'
                sx={{ mr: "auto" }}
                noWrap
              >
                <Link
                  href='#'
                  underline='none'
                  variant='inherit'
                  color='inherit'
                >
                  Home
                </Link>
              </Typography>
              <Button variant='text' sx={{ mr: 3 }}>
                <Typography variant='h6' color='primary.contrastText' noWrap>
                  Log In
                </Typography>
              </Button>
              <Button color='secondary' variant='contained'>
                <Typography variant='h6' color='primary.contrastText' noWrap>
                  Sign Up
                </Typography>
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    );
}
