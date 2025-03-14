import React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Divider, Grid2, Pagination, Paper } from "@mui/material";
import JobPreview from "../../Jobs/JobPreview";
import JobDetail from "../../Jobs/JobDetail";
import { transformJobData } from "../../utility";
import { useApiOnSearch } from "../../../hooks/useApiOnSearch";
import Loader from "../../../common/Loader";

export default function SearchResults()
 {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
  const [showJobDetail, setShowJobDetail] = React.useState(false);
  const {error, data, isLoading} = useApiOnSearch('', transformJobData) 

  const handleJobClick = (jobId: string) => {
    setSelectedJob(jobId);
    setShowJobDetail(prev => !prev);
  };

  const tempData = [
    {
      index: 0,
      jobTitle: "Fullstack Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      salary: "100k"
    },
    {
      index: 1,
      jobTitle: "Backend Software Engineer",
      company: "Microsoft",
      location: "Redmond, WA",
       salary: "100k"
    },
    {
      index: 2,
      jobTitle: "Frontend Software Engineer",
      company: "Facebook",
      location: "Menlo Park, CA",
       salary: "100k"
    },
  ];


  //call api to retreive job data

  return (
    <Paper
    sx={{display: "flex", justifyContent: "center", width: "60%", px: 2, my: 3 }}

    >
      <Grid2 sx={{width: '100%', }}>
        <Typography sx={{ p: "auto", textAlign: "center" }} variant="subtitle1">
        Results
        </Typography>
        <Divider />
        <List dense={true}>
          <Loader open={isLoading} />
          {tempData.map(
            (data, index) => (
              <JobPreview key={index} data={data} onClick={handleJobClick} />
    
              // showJobDetail && <JobDetail jobId={selectedJob} />
              
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
    </Paper>
  );
}
