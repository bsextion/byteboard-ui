import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AuthModal from "./components/Auth/AuthModal";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Saved from "./components/Sidebar/Saved/Saved";
import SavedJob from "./components/Sidebar/Saved/SavedJob";
import Home from "./components/Home/Home";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif", // Set Poppins as the default font
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Routes>
      {/* <Route element={<AuthModal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regster" element={<Register />} /> */}

      <Route index element={<Home />} />
      <Route path="/profile" element={<Login />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/saved/:id" element={<SavedJob />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
