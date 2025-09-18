import { Divider, Grid2, List, Pagination, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "../../../../common/Loader";
import Job from "./Job";
import JobDetail from "./JobDetail";

type JobsPanelProps = {
  loading: boolean,
  jobs: any,
  currentPage: number,
  handleJobClick: (jobId: string) => void,
  handleNextPage: (e: any, pageSelected: number) => void,
};

const JobsPanel: React.FC<JobsPanelProps> = ({ loading, jobs, currentPage, handleJobClick, handleNextPage }) => {
    const noJobsFound = !jobs || jobs.length === 0;
    return (<Paper
        sx={{ display: "flex", justifyContent: "center", width: "60%", px: 2, my: 3 }}
    >
        <Grid2 sx={{ width: '100%', }}>
            <Typography sx={{ p: "auto", textAlign: "center" }} variant="h6">
                Results
            </Typography>
            <Divider />
            <List dense={true}>
                {loading && <Loader open={loading} />}
                {!loading && noJobsFound && <Typography variant="subtitle2" sx={{ textAlign: "center", mt: 2 }}>
                    No Jobs Listed.
                </Typography>}

                {!loading && jobs && jobs.map((data, index) => (
                    <Job
                        key={index}
                        data={data}
                        handleJobClick={handleJobClick}
                    />
                ))}
            </List>
            {jobs && jobs.length > 0 && <Pagination
                count={10}
                page={currentPage}
                onChange={handleNextPage}
                sx={{ display: "flex", justifyContent: "center", my: 2 }}
            />}
        </Grid2>
    </Paper>)
}

export default JobsPanel;