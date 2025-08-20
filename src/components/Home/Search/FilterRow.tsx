import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Modal, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { filterDateOptions, filterEmploymentOptions, sortByOptions } from "../../../types/options";
import { FilterMenuModal } from "../../../types";

const FilterRow = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState({});

    const handleOpen = (type: string = "") => {
        if (type == "sortBy" || type == "filterByDate" || type == "filterEmployment") {
            setActiveModal(menuModal[type]);
        }
        else {
            setActiveModal({});
        }
        setModalOpen((prev) => !prev);
    }

    const handleFilterChange = (index) => {
        console.log("Selected option before:", activeModal.selected);
        activeModal.selected = activeModal.options[index];
        console.log("Selected option after:", activeModal.selected);

    }

    
    const isModalEmpty = Object.keys(activeModal).length === 0;

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const menuButtonStyle = {
        color: "#32317E",
        typography: "button",
        fontSize: 12,
        mx: 1

    }

    let menuModal = {
        sortBy: {
            title: "Sort By",
            selected: sortByOptions[0],
            options: sortByOptions,
        },
        filterByDate: {
            title: "Filter By Date",
            selected: filterDateOptions[0],
            options: filterDateOptions,
        },
        filterEmployment: {
            title: "Filter By Employment",
            selected: filterEmploymentOptions[0],
            options: filterEmploymentOptions
        }
    }

    return (
        <>
            {modalOpen && !isModalEmpty &&
                <Box >
                    <Modal
                        open={open}
                        onClose={handleOpen}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <FormLabel id="demo-radio-buttons-group-label">{activeModal.title}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={activeModal.selected.value}
                                name="radio-buttons-group"
                            >
                                {activeModal.options.map((option, index) => (
                                <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} onClick={() => handleFilterChange(index)}/>
                                ))}
                            </RadioGroup>

                        </Box>
                    </Modal>
                </Box>
            }

            <Box sx={{ display: "flex", justifyContent: "center", width: "60%", px: 5 }}>
                <Button variant="text" sx={menuButtonStyle} onClick={() => handleOpen("sortBy")} endIcon={<KeyboardArrowDownIcon />}>
                    {menuModal["sortBy"].selected["label"]}
                </Button>
                <Button variant="text" sx={menuButtonStyle} onClick={() => handleOpen("filterByDate")} endIcon={<KeyboardArrowDownIcon />}>
                    {menuModal["filterByDate"].selected["label"]}
                </Button >
                <Button variant="text" sx={menuButtonStyle} onClick={() => handleOpen("filterEmployment")} endIcon={<KeyboardArrowDownIcon />}>
                    Employment Type
                </Button>
            </Box>
        </>
    );

}

export default FilterRow;