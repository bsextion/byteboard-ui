import React from 'react'
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Divider, Grid2, Pagination, Paper } from "@mui/material";
import JobPreview from "../../Jobs/JobPreview";
import JobDetail from '../../Jobs/JobDetail';

export default function SearchResults() {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
  return (
    <Paper
    sx={{display: "flex", justifyContent: "center", width: "80%", px: 2, my: 3 }}

    >
      <Grid2 sx={{width: '100%', }}>
        <Typography sx={{ p: "auto", textAlign: "center" }} variant="subtitle1">
          Search Results
        </Typography>
        <Divider />
        <List dense={true}>
          {["Fullstack Software Engineer", "React Developer", "", "", ""].map(
            (title, index) => (

              <JobPreview title={title} index={index}/>
            )
          )}
        </List>
        <Pagination
          count={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            p: 1,
          }}
        />
      </Grid2>
      {/* <JobDetail/> */}
    </Paper>
  );
}
