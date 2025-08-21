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

const JobRow = ({data: {index, jobTitle, employerName, location, salary, employmentType, isRemote, jobPostingDate}, ...rest }) => {

  return (
    <>
      <ListItem
      disableGutters={true}
      disablePadding={false}
        // secondaryAction={
        //   <IconButton edge="end">
        //     <StarRateRoundedIcon sx={{ color: "#757575" }} />
        //   </IconButton>
        // }
      >
        {/* <ListItemAvatar sx={{m: 0, p: 0}}>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar> */}
        <ListItemText
          primary={jobTitle}
          secondary={
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
            >
              <Typography
                variant="body2"
                color="text.primary"
                component="span"
              >
                {employerName}
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                {salary}
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                {employmentType} {isRemote ? " | Remote" : ""}
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                {location}
              </Typography>
            </Typography>
          }
        />
        <ListItemText sx={{ display: "flex", justifyContent: "flex-start", alignSelf: "flex-start", px: 1 }}>
          Posted: {jobPostingDate}
          {/* <Typography variant="body2" color="text.secondary">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Typescript
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HTML/CSS
          </Typography> */}
        </ListItemText>
      </ListItem>
      <Divider />
      </>
  );
};

export default JobRow;
