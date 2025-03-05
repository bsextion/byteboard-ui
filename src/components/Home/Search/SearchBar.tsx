import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  return (
    <Box sx={{ flexGrow: 1, pt: 2 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#FFFFFF" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ color: "#1e1d49"}}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <StyledInputBase
              placeholder="Search jobs…"
              inputProps={{ "aria-label": "search" }}
            />

            <IconButton edge="end">
              <SearchIcon sx={{ color: "#1e1d49" }} />
            </IconButton>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
