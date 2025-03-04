import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const drawerWidth = 60;

export default function ResponsiveDrawer() {
  const drawer = (
    <div>
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton divider={true}>
            <ListItemIcon>
              <AccountCircleRoundedIcon
                sx={{
                  color: "#EFF2FE",
                }}
              />
            </ListItemIcon>
            <ListItemText/>
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarRateRoundedIcon sx={{ color: "#EFF2FE" }} />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            zIndex: 1,
            marginTop: 8,
            backgroundColor: "#686EEC",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
