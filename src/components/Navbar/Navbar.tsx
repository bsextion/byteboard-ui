import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";


const Navbar = () => {
  return (
    <>
    <Box>
      <AppBar>
        <Toolbar sx={{backgroundColor: '#FFFFFF', color: '#1e1d49'}}> 
          <img src="/src/assets/logo.png" height={50}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ByteBoard
            {/* Poppins font */}
          </Typography>
          <Button className="login-btn" sx={{backgroundColor: '#E3E3E3', color: '#1e1d49', mx: 1}}>Login</Button>
          <Button sx={{backgroundColor: '#686EEC', color: 'white', mx: 1}}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Navbar;
