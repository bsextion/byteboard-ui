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
    <Box sx={{ width: { md: 600, sm: '100%' }, p: 2, height: "100%", overflowY: "auto" }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, overflowY: "auto" }}>
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
            <Box display="flex" sx={{ my: 0.5 }}>
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


        <Divider sx={{ my: 2 }} />



        <Box  display="flex" flexWrap="wrap">
          <Box sx={{ mb: 0.5, width: '100%' }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Mentioned Skills:
            </Typography>
          </Box>
          <Box display="flex" gap={1}  flexWrap="wrap"> 

          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />
          <Chip variant="outlined" label="Java" sx={{ mr: 1, color: '#686EEC', borderColor: '#A8B8F9', fontWeight: "medium", '&:hover': { bgcolor: '#686EEC', color: 'white' } }} />


</Box>
        </Box>
        <Divider sx={{ my: 2 }} />

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

      <Drawer anchor="right" open={showJobDetail} onClose={() => handlePanelClose()} sx={{ overflowY: "auto" }} >
        <IconButton size="small" sx={{ mr: 3, mt: 0.5, width: 40, alignSelf: "end" }} onClick={() => handlePanelClose()} >
          <CloseIcon />
        </IconButton>
        {JobDetailDrawer}
      </Drawer>
    </Box>
  )
}

export default DetailSidePanel;