import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import { useJobSearch } from "../../../utils/useJobSearch";
import { JobSearchRequest } from "../../../models/types";
import SearchTable from "./SearchResults";
import FilterRow from "./FilterRow";
import { SearchParamContext } from "../Home"; 
import Filter from "./Filter/Filter";
import SearchResults from "./SearchResults";

const Search = () => {
  const { searchParams, setSearchParams, triggerSearch, setTriggerSearch } = React.useContext(SearchParamContext);
  const {page} = searchParams;
  const { jobs, loading, error } = useJobSearch(searchParams, [triggerSearch]);

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
      <SearchBar setTriggerSearch={setTriggerSearch} searchParams={searchParams} setSearchParams={setSearchParams} />
      <Filter setTriggerSearch={setTriggerSearch} searchParams={searchParams} setSearchParams={setSearchParams} />
      <SearchResults jobs={jobs} loading={loading} currentPage={page} setSearchParams={setSearchParams} setTriggerSearch={setTriggerSearch}/>
    </Box>
  );
};

export default Search;
