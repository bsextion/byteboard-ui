import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Search from "./Search/Search";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mt: 8, height: "90vh" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 12,
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
        <Typography variant="h4" sx={{ color: "#686EEC", py: 3 }}>
          Job Searching Simplified
        </Typography>
        <Search/>
      </Box>
    </Box>
  );
};

export default Home;
