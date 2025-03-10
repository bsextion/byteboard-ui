import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { sm: "100vw", md: "10rem" },
        height: { xs: "5rem", md: "100vh" },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%" ,
          backgroundColor: "#686EEC",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            color: "#E3E3E3",
          }}
        >
          <ListItem>
            <ListItemButton component={Link} to="/">
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText
                primary={<Typography variant="subtitle1">Home</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/profile/userid">
              <Person2Icon sx={{ mr: 1 }} />
              <ListItemText
                primary={<Typography variant="subtitle1">Profile</Typography>}
              />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component={Link} to="/saved/jobid">
              <BookmarkIcon sx={{ mr: 1 }} />
              <ListItemText
                primary={<Typography variant="subtitle1">Saved</Typography>}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Sidebar;
