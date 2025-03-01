import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import '@fontsource/poppins/300.css' 
import '@fontsource/poppins/400.css' 
import '@fontsource/poppins/500.css' 
import '@fontsource/poppins/700.css' 
import { createTheme, ThemeProvider } from "@mui/material"

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the default font
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Home/>
    </ThemeProvider>
  )
}

export default App
