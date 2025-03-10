import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { Box } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Navbar />
    <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"} }}>
    <Sidebar />
    <App />
    </Box>
  </Box>
  </BrowserRouter>
);
