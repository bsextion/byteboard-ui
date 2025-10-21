import { Box, Button, Divider, Grid2, List, Pagination, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "../../../../common/Loader";
import Job from "./Job";

type JobsPanelProps = {
  loading: boolean,
  jobs: any,
  currentPage: number,
  handleJobClick: (jobId: string) => void,
  handlePage: (e: any, pageSelected: number) => void,
};

const JobsPanel: React.FC<JobsPanelProps> = ({ loading, jobs, currentPage, handleJobClick, handlePage }) => {
    const noJobsFound = !jobs || jobs.length === 0;
    return (
        <Paper
            sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "80%", md: "60%" },
                px: { xs: 1, md: 2 },
                my: 3,
            }}
        >
            <Grid2 sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <Typography sx={{ p: "auto", textAlign: "center" }} variant="h6">
                    Results
                </Typography>
                <Divider />
                <List
                    dense={true}
                    sx={{
                        maxHeight: 360,
                        overflowY: "auto",
                        // optional: nicer thin scrollbar
                        "&::-webkit-scrollbar": { width: 8 },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "rgba(0,0,0,0.2)",
                            borderRadius: 2,
                        },
                    }}
                >
                    {loading && <Loader open={loading} />}
                    {!loading && noJobsFound && (
                        <Typography variant="subtitle2" sx={{ textAlign: "center", mt: 2 }}>
                            No Jobs Listed.
                        </Typography>
                    )}

                    {!loading &&
                        jobs &&
                        jobs.map((data, index) => (
                            <Job key={index} data={data} handleJobClick={handleJobClick} />
                        ))}
                </List>

                <Box sx={{ display: "flex", justifyContent: "end", my: 1, gap: 1 }}>
                    {currentPage > 1 && (
                        <Button variant="outlined" onClick={(e) => handlePage(e, currentPage - 1)}>
                            Previous
                        </Button>
                    )}
                    {jobs && (
                        <Button sx={{ alignSelf: "center" }} disabled>
                            {currentPage}
                        </Button>
                    )}
                    <Button
                        onClick={(e) => handlePage(e, currentPage + 1)}
                        variant="contained"
                        disabled={!jobs || jobs.length === 0}
                    >
                        Next
                    </Button>
                </Box>
            </Grid2>
        </Paper>
    );
}

export default JobsPanel;