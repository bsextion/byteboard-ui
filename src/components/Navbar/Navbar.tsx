import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        boxShadow: 5,
        backgroundColor: "#FFFFFF",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/assets/logo.png" alt="logo" height={45} />
      </Link>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, px: 1, fontWeight: "bold", color: "#1e1d49" }}
      >
        ByteBoard
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button
          className="login-btn"
          sx={{ backgroundColor: "#E3E3E3", color: "#1e1d49", mx: 1 }}
        >
          Login
        </Button>
        <Button sx={{ backgroundColor: "#686EEC", color: "white", mx: 1 }}>
          Register
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;
