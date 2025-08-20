import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import { useJobSearch } from "../../../utils/useJobSearch";
import { JobSearchRequest } from "../../../types";
import SearchTable from "./SearchTable";
import FilterRow from "./FilterRow";

const Search = () => {
  const [triggerSearch, setTriggerSearch] = useState(0);
  const [param, setParam] = useState({} as JobSearchRequest);
  const { jobs, loading, error } = useJobSearch(param, [triggerSearch]);

  //usecontext to manage search state

    //param, setParam will called from the context and used in SearchBar and FilterRow components, to be defined in context provider here

    //setParam term will only update a specific field with value

    //update the filter will update the specific field according to the active filter type


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
      <SearchBar setTriggerSearch={setTriggerSearch} param={param} setParam={setParam} />
      <FilterRow  />
      <SearchTable jobs={jobs} loading={loading} />
    </Box>
  );
};

export default Search;
