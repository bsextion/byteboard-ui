import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FolderIcon from "@mui/icons-material/Folder";

const JobPreview = ({ index, title }) => {
  return (
    <>
      <ListItem
        key={index}
        secondaryAction={
          <IconButton edge="end">
            <StarRateRoundedIcon sx={{ color: "#757575" }} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <>
              <Typography component="div" variant="body2" color="text.primary">
                GitHub
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
              >
                $100k - $120k
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
              >
                Fulltime - Hybrid
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
              >
                New York, NY
              </Typography>
            </>
          }
        />
        <ListItemText sx={{ display: "flex", justifyContent: "flex-end" }}>
          Skills Mentioned:
          <Typography variant="body2" color="text.secondary">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Typescript
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HTML/CSS
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  );
};

export default JobPreview;
