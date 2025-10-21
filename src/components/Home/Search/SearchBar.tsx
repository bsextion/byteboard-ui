import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Alert, Box } from "@mui/material";
import AlertMessage from "../../../common/AlertMessage";

export default function SearchBar({ setTriggerSearch, searchParams, setSearchParams }) {

  const [isValid, setIsValid] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchParams.query.trim() == "") {
      setIsValid(false);
      return;
    }

    if (searchParams) {
      console.log("Triggered search:", searchParams);
      setTriggerSearch((prev: number) => prev + 1); // Trigger search
    }
  };

  const handleChange = (query: string) => {
    setIsValid(true);
    setSearchParams((prev) => ({
      ...prev,
      query
    }));
  }

  return (
    <>
      <Paper
        component="form"
        sx={{ px: 2, display: "flex", justifyContent: "center", width: { xs: "80%", md: "50%" } }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Jobs"
          inputProps={{ "aria-label": "search jobs" }}
          onChange={(e) => handleChange(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {!isValid && <AlertMessage type="error" message="Please enter a valid search query."
        sx={{ mt: 1, width: "30%" }} />}

    </>
  );
}