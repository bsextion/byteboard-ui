import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { Box } from "@mui/material";
import { useJobSearch } from "../../../utils/useJobSearch";
import { JobSearchRequest } from "../../../types";

const Search = () => {
  const [triggerSearch, setTriggerSearch] = useState(0);
  const [searchTerm, setSearchTerm] = useState({} as JobSearchRequest);
  const { jobs, loading, error } = useJobSearch(searchTerm, [triggerSearch]);

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <SearchBar setTriggerSearch={setTriggerSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResults jobs={jobs} loading={loading} />
    </Box>
  );
};

export default Search;
