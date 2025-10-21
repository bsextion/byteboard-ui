import { Box, Stack, Typography } from "@mui/material";
import Search from "./Search/Search";
import { createContext, useState } from "react";
import { Employment, JobPostDate, JobSearchRequest, SortBy } from "../../models/types";
import { filterEmploymentOptions } from "../../models/options";

export const SearchParamContext = createContext();

const Home = () => {
  const [searchParams, setSearchParams] = useState<JobSearchRequest>(
     {
      query: "",
      page: 1, //default page
      sortBy: SortBy.RECENT, // default value
      datePosted: JobPostDate.TODAY, // default value
      workFromHome: true,
      employmentTypes: Object.values(filterEmploymentOptions).map(item => item.value), // default value
      excludePublishers: "",
      fields: ""
    }
  );
  const [triggerSearch, setTriggerSearch] = useState(0);

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
    <Stack sx={{ width: "100vw", height: "100vh" }}>
  <Box sx={{ flex: "0 0 25%", textAlign: "center" }}>
    <DescContainer />
  </Box>

  <Box sx={{ flex: "1 1 auto" }}>
    <SearchParamContext.Provider value={{
        searchParams, setSearchParams, triggerSearch, setTriggerSearch
      }}>
      <Search />
    </SearchParamContext.Provider>
  </Box>
</Stack>
  );
};

export default Home;
