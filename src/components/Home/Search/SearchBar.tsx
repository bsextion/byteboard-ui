import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ setTriggerSearch, searchParams, setSearchParams }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
     if (searchParams.query.trim() == "") {
            console.log("No query! Please add a ui message!");
            return;
        }
        
    if (searchParams) {
      console.log("Triggered search:", searchParams);
      setTriggerSearch((prev: number) => prev + 1); // Trigger search
    }
  };

  const handleChange = (query: string ) => {
    setSearchParams((prev) => ({
      ...prev,
      query
    }));
  }

  return (
    <Paper
      component="form"
      sx={{ px: 2, display: "flex", justifyContent: "center", width: "50%" }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Jobs"
        inputProps={{ "aria-label": "search jobs" }}
        onChange={(e) => handleChange(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}