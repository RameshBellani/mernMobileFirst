import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={NavLink} to="/signin" sx={{ mr: 2 }}>
            Sign In
          </Button>
          <Button color="inherit" component={NavLink} to="/signup" sx={{ mr: 2 }}>
            Sign Up
          </Button>
          <Button color="inherit" component={NavLink} to="/characters">
            Characters
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4">Welcome to the Home Page</Typography>
        <Typography variant="body1">
          see Star Wars characters
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
