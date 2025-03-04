import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Grid2 } from "@mui/material";

function generate(element: React.ReactElement<unknown>) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function SearchResults() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{backgroundColor: 'white', borderColor: 'black', flexGrow: 1, pt: 2}}>
      <Grid2 sx={{width: '100%'}}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="subtitle1" component="div">
          Results
        </Typography>
        <Divider/>
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid2>
    </Box>
  );
}
