import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuButton = ({ title, ...rest }) => {

    const buttonStyle = {
        color: "#32317E",
        typography: "button",
        fontSize: 12,
        mx: 1
    }

    return (
        <Button variant="text" sx={buttonStyle} endIcon={<KeyboardArrowDownIcon />} {...rest}>
            {title}
        </Button>
    )
}

export default MenuButton