import React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Divider, Grid2, Pagination, Paper } from "@mui/material";
import JobPreview from "../../Jobs/JobPreview";
import Loader from "../../../common/Loader";

interface SearchResultsProps {
  loading: boolean;
}

export default function SearchResults({ loading, jobs }: SearchResultsProps) {
  {
    const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
    const [showJobDetail, setShowJobDetail] = React.useState(false);

    const handleJobClick = (jobId: string) => {
      setSelectedJob(jobId);
      setShowJobDetail(prev => !prev);
    }

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

    return (
      <Paper
        sx={{ display: "flex", justifyContent: "center", width: "60%", px: 2, my: 3 }}

      >
        <Grid2 sx={{ width: '100%', }}>
          <Typography sx={{ p: "auto", textAlign: "center" }} variant="subtitle1">
            Results
          </Typography>
          <Divider />
          <List dense={true}>
            {!loading && !jobs && <Typography variant="subtitle2" sx={{ textAlign: "center", mt: 2 }}>
              No results found
            </Typography>}
            {loading && <Loader open={loading} />}
            {!loading && jobs && jobs.map((data, index) => (
              <JobPreview
                key={index}
                data={data}
                onClick={() => handleJobClick(data.index.toString())}
              />
            ))}


            {/* {showJobDetail && <JobDetail jobId={selectedJob} />} */}
            {/*   
          {!loading && jobs.length === 0 && (
            <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 2 }}>
              No results found
            </Typography>
          )} */}
            {/* <Loader open={false} />
          {}
          {jobs.map(
            (data, index) => (
              <JobPreview key={index} data={data} onClick={handleJobClick} />
    
              // showJobDetail && <JobDetail jobId={selectedJob} />
              
            )
          )} */}

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
}
