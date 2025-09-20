import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Job = ( {data, handleJobClick}) => {
const {jobId, jobTitle, employerName, location, salary, employmentType, isRemote, jobPostingDate} = data
return (
    <>

        <ListItemButton onClick={() => handleJobClick(jobId)}>
        <ListItemText  sx={{display: "flex", flexDirection: "column", width: '70%'}}
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
 
         </ListItemText>
        </ListItemButton>

      <Divider />
      </>
  );
};

export default Job;
