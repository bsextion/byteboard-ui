import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { Box } from "@mui/material";
import JobDetail from "../../Jobs/JobDetail";

const Search = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <SearchBar />
      <SearchResults />
            {/* <JobDetail/> */}

    </Box>
  );
};

export default Search;
