import { Box, FormLabel, Modal } from "@mui/material";
import React from "react";
import { FilterItem } from "../../../../models/types";
import { MultiSelectView, View } from "./ModalView";
import { SearchParamContext } from "../../Home";

type FilterModalProps = {
    modal: FilterItem;
    handleFilterChange: (index: number) => void;
    handleOpen: () => void;
    isOpen: boolean;
};

const FilterModal: React.FC<FilterModalProps> = ({ modal, handleFilterChange, handleOpen, isOpen }) => {
    const {setTriggerSearch, searchParams } = React.useContext(SearchParamContext);
    const {query} = searchParams;

    const isMultiSelect = modal && Array.isArray(modal.selected);

    const isFilterModalEmpty = !modal || Object.keys(modal).length === 0;

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

    const handleTrigger = () => {
        handleOpen();
        if (query.trim() === "") {
            return;
        }
        setTriggerSearch((prev: number) => prev + 1);
    }

    return (
        <>
            {isOpen && !isFilterModalEmpty &&
                <Box>
                    <Modal
                        open={isOpen}
                        onClose={() => handleOpen()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <FormLabel id="demo-radio-buttons-group-label">{modal.title}</FormLabel>
                            {isMultiSelect ? 
                            <MultiSelectView modal={modal} handleFilterChange={handleFilterChange} handleTrigger={handleTrigger} /> : 
                            <View modal={modal} handleFilterChange={handleFilterChange} />}
                        </Box>
                    </Modal>
                </Box>
            }
        </>
    )
}

export default FilterModal;