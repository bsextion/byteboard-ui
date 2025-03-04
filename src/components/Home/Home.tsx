import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mt: 8, height: "90vh" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 15,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "medium", color: "#32317E" }}
        >
          Built for Tech Professionals
        </Typography>
        <Typography variant="h4" sx={{ color: "#686EEC" }}>
          Job Searching Simplified
        </Typography>
        <SearchBar/>
      </Box>
    </Box>
  );
};

export default Home;
