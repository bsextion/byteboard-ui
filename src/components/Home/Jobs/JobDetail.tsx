import {
  Box,
  Chip,
  Divider,
  Grid2,
  Paper,
  styled,
} from "@mui/material";
import React from "react";

const JobDetail = () => {
  const hasSkill: boolean = true;

  const IHeader: React.FC<{ children: React.ReactNode; sx?: object }> = ({
    children,
    sx,
  }) => (
    <Box
      sx={{
        px: 1,
        pt: 1,
        fontWeight: "bold",
        fontSize: 19,
        color: "#757575",
        ...sx,
      }}
    >
      {children}
    </Box>
  );

  const ISubtitle: React.FC<{ children: React.ReactNode; sx?: object }> = ({
    children,
    sx,
  }) => (
    <Box sx={{ px: 1, pt: 0.5, fontWeight: "bolder", fontSize: 16, ...sx }}>
      {children}
    </Box>
  );

  const IBody = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    paddingLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const ICaption = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.caption,
    paddingLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "50%",
        height: "70%",
        my: 3,
      }}
    >
      <Grid2 sx={{ width: "100%", p: 1 }}>
        <Box
          className="overview-row"
          sx={{ display: "flex", justifyContent: "flex-start", px: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <IHeader>Full Stack Software Engineer</IHeader>
            <ISubtitle>GitHub</ISubtitle>
            <IBody>New York, NY</IBody>
            <ICaption>$120K/yr</ICaption>
          </Box>
          <IHeader sx={{ marginLeft: "auto" }}>Date Posted: 2/28/25</IHeader>
        </Box>
        <Divider />
        <Box className="skills-row" sx={{ display: "flex", px: 1 }}>
          {/* Don't show skills in small view */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <IHeader>Skills:</IHeader>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 1 }}>
              <Chip
                label="Javascript"
                sx={{ backgroundColor: hasSkill && "#A8B8F9" }}
              />
              {/* On hover a tool tip will appear saying user has this skill in profile */}
              <Chip label="Typescript" />
              <Chip label="Java" />
              <Chip label="Python" />
              <Chip label="Git" />
              <Chip label="SQL" />
              <Chip label="Databases" />
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <IHeader>Degree/Certifications:</IHeader>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 1 }}>
            <Chip label="Bachelors" />
            <Chip label="Masters" />
            <Chip label="AWS Solutions Architect" />
          </Box>
        </Box>
        <Divider />
        <Box
          className="description-row"
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 1,
            textAlign: "left",
          }}
        >
          <IHeader>Job Description:</IHeader>
          <IBody>
            Senior .Net Developer with AWS Duration: 6 months with extension
            Location: Chicago (Hybrid) Interview: Video Note: This is a
            backfill. Top 5 Skill sets • .NET Core / C# • Strong with design
            patterns • AWS • Relational & non-relational databases • NUnit /
            XUnit Job Summary: • Program and build software using languages and
            technologies of the .NET framework. Improve existing software •
            Develop documentation throughout the software development life cycle
            (SDLC) • Serve as an expert on applications and provide technical
            support Qualifications: • Proven experience as a .NET Developer •
            Experience with Software Development Languages & Tools, C#,
            ASP.NET/MVC, Web API, WCF, MS Visual Studio, MS TFS, GitHub •
            Familiarity with architecture styles/APIs (REST, RPC)
          </IBody>
        </Box>
      </Grid2>
    </Paper>
  );
};

export default JobDetail;
