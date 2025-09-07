import { Button, Checkbox, FormControlLabel } from "@mui/material";
import key from "../../../../models/constants.json";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type MenuButtonProps = {
    title: string;
    isCheckbox?: boolean;
    selected?: boolean;
    handleFilterToggle?: (mapping: string) => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ title, isCheckbox = false, selected, handleFilterToggle, ...rest }) => {

    const buttonStyle = {
        color: "#32317E",
        typography: "button",
        fontSize: 12,
        mx: 1
    }

    const checkBoxStyle = {
        color: "#32317E",
        fontSize: "1.2rem",
    }

    return (
        isCheckbox ?
                <FormControlLabel
                    control={<Checkbox />}
                    label={title}
                    value={selected}
                    checked={selected}
                    sx={checkBoxStyle}
                    onChange={() => handleFilterToggle(key.mapping.remote)}      
                />
             :
            <Button variant="text" sx={buttonStyle} endIcon={<KeyboardArrowDownIcon />} {...rest}>
                {title}
            </Button>
    )
}

export default MenuButton