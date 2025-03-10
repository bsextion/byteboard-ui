import { Box, Button, Divider, Grid2, Paper, styled } from "@mui/material";
import React from "react";

const JobDetail = () => {
  const IHeader = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const IBody = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const ICaption = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.caption,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Grid2>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <IHeader>Full Stack Software Engineer</IHeader>
          <IBody>New York, NY</IBody>
          <ICaption>$120K/yr</ICaption>
        </Box>
        <IHeader sx={{ marginLeft: "auto" }}>Date Posted: 2/28/25</IHeader>
      </Box>
      <Divider />
      <Box sx={{ display: "flex" }}>
        <IHeader>Skills</IHeader>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IHeader>Certifications</IHeader>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IHeader>Job Description</IHeader>
        <IBody>
          Senior .Net Developer with AWS Duration: 6 months with extension
          Location: Chicago (Hybrid) Interview: Video Note: This is a backfill.
          Top 5 Skill sets • .NET Core / C# • Strong with design patterns • AWS
          • Relational & non-relational databases • NUnit / XUnit Job Summary: •
          Program and build software using languages and technologies of the
          .NET framework. Improve existing software • Develop documentation
          throughout the software development life cycle (SDLC) • Serve as an
          expert on applications and provide technical support Qualifications: •
          Proven experience as a .NET Developer • Experience with Software
          Development Languages & Tools, C#, ASP.NET/MVC, Web API, WCF, MS
          Visual Studio, MS TFS, GitHub • Familiarity with architecture
          styles/APIs (REST, RPC)
        </IBody>
      </Box>
    </Grid2>
  );
};

export default JobDetail;
