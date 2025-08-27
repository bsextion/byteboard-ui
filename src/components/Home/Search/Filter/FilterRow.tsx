import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Modal, Radio, RadioGroup, Typography } from "@mui/material";
import React, { use, useEffect } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { filterDateOptions, filterEmploymentOptions, sortByOptions } from "../../../../models/options";
import { FilterMenuModal } from "../../../../models/types";
import key from "../../../../models/constants.json";

const FilterRow = ({ searchParams, setSearchParams, setTriggerSearch }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState({});

    const [filterModal, setFilterModal] = React.useState({
        sortBy: {
            mapping: key.mapping.sort,
            title: key.title.sort,
            selected: sortByOptions[0],
            options: sortByOptions,
        },
        datePosted: {
            mapping: key.mapping.date,
            title: key.title.date,
            selected: filterDateOptions[0],
            options: filterDateOptions,
        },
        employmentTypes: {
            mapping: key.mapping.employment,
            title: key.title.employment,
            selected: [...filterEmploymentOptions],
            options: filterEmploymentOptions
        }
    });

    const handleOpen = (type: string = "") => {
        if (Object.values(key.mapping).some(val => val === type)) {
            const modalData = filterModal[type];
            setActiveModal(modalData);
        }
        else {
            setActiveModal({} as FilterMenuModal);
        }
        setModalOpen((prev) => !prev);
    }


    const isValueArray = (value: any) => { return Array.isArray(value) }
    const allValuesSelected = (activeModal: any) => { Object.values(activeModal.selected).some(val => val) }

    const handleFilterChange = (index) => {
        let updatedModal = { ...activeModal }
        console.log('Updated modal : ', updatedModal);
        if (isValueArray(updatedModal.selected)) {
            const selectedOption = updatedModal.options[index]
            const indexOfSelected = updatedModal.selected.findIndex(option => option === selectedOption);
            console.log('Selection  option : ', selectedOption);
            console.log('Index of selected : ', indexOfSelected);
            console.log('Current selected : ', updatedModal.selected);
            indexOfSelected === -1 ? updatedModal.selected.push(selectedOption) : updatedModal.selected.splice(indexOfSelected, 1)

            console.log('Updated modal with selected array: ', updatedModal);
        }

        else {
            updatedModal = {
                ...activeModal,
                selected: activeModal.options[index]
            };
            console.log('Updated modal with selected value: ', updatedModal)
        }

        setFilterModal((prev) => ({
            ...prev,
            [updatedModal.mapping]: updatedModal
        }));


        setSearchParams((prev) => ({
            ...prev,
            [updatedModal.mapping]: isValueArray(updatedModal.selected) ? Object.values(updatedModal.selected).map(item => item.value) : updatedModal.selected.value
        }));

        setActiveModal(updatedModal);

        console.log('Search Params: ', searchParams)

        if (searchParams.query.trim() == "") {
            console.log("No query! Please add a ui message!");
            return;
        }

        setTriggerSearch((prev: number) => prev + 1);

    }

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

    const isModalEmpty = !activeModal || Object.keys(activeModal).length === 0;

    const activeModalCheckBox = activeModal && Array.isArray(activeModal.selected); //update to support publisher radiobox

    return (
        <>
            {modalOpen && !isModalEmpty &&
                <Box >
                    <Modal
                        open={modalOpen}
                        onClose={() => handleOpen()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <FormLabel id="demo-radio-buttons-group-label">{activeModal.title}</FormLabel>
                            {activeModalCheckBox ?

                                <FormGroup>
                                    {activeModal.options.map((option, index) => (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    checked={
                                                        activeModal.selected.some((selected) => selected.value === option.value)
                                                    }
                                                    value={option.value}
                                                    onChange={(event) => {
                                                        const index = activeModal.options.findIndex(option => option.value === event.target.value);
                                                        if (index !== -1) {
                                                            handleFilterChange(index);
                                                        }
                                                    }}
                                                />
                                            }
                                            label={option.label}
                                        />
                                    ))}
                                </FormGroup> :
                                <>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        value={activeModal.selected.value}
                                        name="radio-buttons-group"
                                        onChange={(event) => {
                                            const index = activeModal.options.findIndex(option => option.value === event.target.value);
                                            if (index !== -1) {
                                                handleFilterChange(index);
                                            }
                                        }}
                                    >
                                        {activeModal.options.map((option, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={option.value}
                                                control={<Radio />}
                                                label={option.label}
                                            />
                                        ))}
                                    </RadioGroup>
                                </>}


                        </Box>
                    </Modal>
                </Box>
            }

            <Box sx={{ display: "flex", justifyContent: "center", width: "60%", px: 5 }}>
                <Button variant="text" sx={menuButtonStyle} onClick={() => handleOpen(key.mapping.sort)} endIcon={<KeyboardArrowDownIcon />}>
                    {filterModal[key.mapping.sort].selected.label}
                </Button>
                <Button variant="text" sx={menuButtonStyle} onClick={() => handleOpen(key.mapping.date)} endIcon={<KeyboardArrowDownIcon />}>
                    {filterModal[key.mapping.date].selected.label}
                </Button >
                <Button variant="text" sx={menuButtonStyle} onClick={() => handleOpen(key.mapping.employment)} endIcon={<KeyboardArrowDownIcon />}>
                    Employment Type
                </Button>
            </Box>
        </>
    );

}

export default FilterRow;