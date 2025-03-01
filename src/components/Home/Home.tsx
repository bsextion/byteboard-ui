import { autocompleteClasses, Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ pt: 12, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h2" sx={{my: 1, flexGrow: 0.5, fontWeight: "medium", color: '#32317E'}}>Built for Tech Professionals</Typography>
      <Typography variant="h4" sx={{color: '#686EEC'}}>Job Searching Simplified</Typography>
    </Box>
  );
};

export default Home;
