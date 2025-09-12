import { Alert, Backdrop, CircularProgress } from "@mui/material";

const AlertMessage = ({ type = "", message = "", ...rest }) => {
    return (
        <Alert severity={type} {...rest}>
            {message}
        </Alert>
    );
};

export default AlertMessage;
