import {Box, Stack, Typography } from "@mui/material";
import Search from "./Search/Search";

const Home = () => {
  const DescContainer = () => (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
        height: "25%",
      }}
    >
      <Typography
        sx={{ typography: { xs: "h4", md: "h3" }, color: "#32317E", pt: 8 }}
      >
        Built for Tech Professionals
      </Typography>
      <Typography
        sx={{ color: "#686EEC", py: 2, typography: { xs: "h5", md: "h4" } }}
      >
        Job Searching Simplified
      </Typography>
    </Box>
  );

  return (
    <Stack direction="column" sx={{width: "100vw", height: "100vh"}}>
      <DescContainer />
      <Search/>
      </Stack>
  );
};

export default Home;
