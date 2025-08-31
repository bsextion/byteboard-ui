import React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Divider, Grid2, Pagination, Paper } from "@mui/material";
import JobRow from "../Jobs/JobRow";
import Loader from "../../../common/Loader";


type SearchResultsProps = {
    loading: boolean;
    jobs: any
};

export default function SearchResults({ loading, jobs, currentPage, setSearchParams, setTriggerSearch }) {
  {
    const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
    const [showJobDetail, setShowJobDetail] = React.useState(false);

    const handleJobClick = (jobId: string) => {
      setSelectedJob(jobId);
      setShowJobDetail(prev => !prev);
    }

    const handleNextPage = (e: any, pageSelected: number) => {
      console.log("Page clicked: ", pageSelected)
        setSearchParams((prev) => ({
      ...prev,
      page: pageSelected
    }));
    
     setTriggerSearch((prev: number) => prev + 1);
       
    }

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
              <JobRow
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
          page={currentPage }
          disabled={jobs.length < 1}
            count={jobs.length < 1 ? 1 : 50}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              p: 1,
            }}
            onChange={(e, page) => handleNextPage(e, page)}
          />
        </Grid2>
      </Paper>
    );
  }
}
