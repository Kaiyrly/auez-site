import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Navbar
        </Typography>
        {/* Add your navigation links/buttons here */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
