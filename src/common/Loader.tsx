import { Backdrop, CircularProgress } from "@mui/material";

const Loader = ({ open = false }) => {
  return (
      <CircularProgress color="inherit" />
  );
};

export default Loader;
