import { Box, Button, Chip, Divider, Drawer, Grid2, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Job } from "../../../../models/types";
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import { LocationOn } from "@mui/icons-material";

type DetailSidePanelProps = {
  selectedJob: any,
  showJobDetail: boolean,
  handlePanelClose: () => void,
};

const DetailSidePanel: React.FC<DetailSidePanelProps> = ({ selectedJob, showJobDetail, handlePanelClose }) => {
  const JobDetailDrawer = (
    showJobDetail && selectedJob &&
    <Box sx={{ width: {md: 600, sm: '100%'}, p: 2, height: "100%" }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" >
            <Typography variant="h6" fontWeight="bold">
              {selectedJob.jobTitle}
            </Typography>

            <Box display="flex" alignItems="center" gap={1}>
              <Typography color="text.secondary" sx={{ mr: 3, my: 1 }}>
                {selectedJob.employerName}
              </Typography>
              <Chip label={selectedJob.employmentType} variant="filled" sx={{ bgcolor: "#686EEC", color: "white" }} />
              {selectedJob.isRemote && <Chip label={"Remote"} variant="filled" sx={{ bgcolor: "#686EEC", color: "white" }} />}
            </Box>
            <Box display="flex" sx={{my: 0.5}}>
              <LocationOn fontSize="small" />
              <Typography variant="body2" color="text.primary">
                {selectedJob.location}
              </Typography>

            </Box>
            <Typography variant="body2" color="text.primary" sx={{ mt: 0.5 }}>
              {selectedJob.salary}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
              Posted {selectedJob.jobPostingDate} {selectedJob.jobPublisher ? `on ${selectedJob.jobPublisher}` : ""}
            </Typography>

          </Box>
          <Box display="flex" flexDirection="column" height={100} alignContent="end">

            <Button href={selectedJob.jobLink} target="_blank" rel="" variant="contained" size="small" sx={{ mr: 1, bgcolor: '#38349F', '&:hover': { bgcolor: '#38349F' } }}>
              Apply
            </Button>
            <IconButton>
              {/* Put star or heart icon */}
            </IconButton>
          </Box>
        </Box>


        {/* <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              {selectedJob.job_location || "New York, NY"} •{" "}
              {selectedJob.job_min_salary || "$120K/yr"}
            </Typography>
          </Box> */}

        <Divider sx={{ my: 2 }} />


        {/* <Typography variant="subtitle2" fontWeight="bold">
            Skills:
          </Typography>
          <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
            {selectedJob.skills?.map((skill, i) => (
              <Chip key={i} label={skill} color="primary" variant="outlined" />
            )) || (
              <>
                <Chip label="JavaScript" />
                <Chip label="TypeScript" />
                <Chip label="HTML" />
                <Chip label="CSS" />
                <Chip label="AWS" />
                <Chip label="Java" />
                <Chip label="Python" />
                <Chip label="GitHub" />
              </>
            )}
          </Box> */}


        {/* <Typography variant="subtitle2" fontWeight="bold">
            Degree/Certifications:
          </Typography>
          <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
            {selectedJob.degrees?.map((deg, i) => (
              <Chip key={i} label={deg} color="secondary" variant="outlined" />
            )) || (
              <>
                <Chip label="Bachelor's" />
                <Chip label="AWS Solutions Architect" />
              </>
            )}
          </Box> */}

        <Typography variant="subtitle2" fontWeight="bold">
          Job Description:
        </Typography>
        <Typography variant="body2" mt={1} sx={{ whiteSpace: "pre-line" }}>
          {selectedJob.description}
        </Typography>
      </Paper>
    </Box>

  );
  return (
    <Box sx={{ display: 'flex' }}>
    
    <Drawer anchor="right" open={showJobDetail} onClose={() => handlePanelClose()} >
        <IconButton size="small" sx={{mr: 3, mt: 0.5, width: 40, alignSelf: "end"}} onClick={() => handlePanelClose()} >
          <CloseIcon />
        </IconButton>
      {JobDetailDrawer}
    </Drawer>
    </Box>
  )
}

export default DetailSidePanel;