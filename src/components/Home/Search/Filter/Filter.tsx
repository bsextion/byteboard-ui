import React from "react";
import FilterModal from "./FilterModal";
import { Box } from "@mui/material";
import key from "../../../../models/constants.json";
import MenuButton from "./MenuButton";
import { FilterItem, FilterModals } from "../../../../models/types";
import { filterDateOptions, filterEmploymentOptions, sortByOptions } from "../../../../models/options";

const Filter = ({ setTriggerSearch, searchParams, setSearchParams }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeFilterModal, setActiveFilterModal] = React.useState({} as FilterItem);
    const [filterModals, setFilterModals] = React.useState<FilterModals>({
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
        },
        excludePublishers: {
            mapping: "",
            title: "",
            selected: [],
            options: [],
        }
    });

    const isMultiSelect = (value: any) => { return Array.isArray(value) }

    const handleOpen = (type: string = "") => {
        if (Object.values(key.mapping).some(val => val === type)) {
            const modal = filterModals[type as keyof FilterModals];
            setActiveFilterModal(modal);
        }
        else {
            setActiveFilterModal({} as FilterItem);
        }
        setIsOpen((prev) => !prev);
    }

    const handleMultiSelected = (modal: FilterItem, index: number) => {
        const selectedOption = modal.options[index]
        const indexOfSelected = modal.selected.findIndex(option => option === selectedOption);
        indexOfSelected === -1 ? modal.selected.push(selectedOption) : modal.selected.splice(indexOfSelected, 1)
    }

    const handleSelected = (modal: FilterItem, index: number) => {
        modal = {
                ...activeFilterModal,
                selected: activeFilterModal.options[index]
            };
    }

    const handleFilterChange = (index: number) => {
        let updatedModal = { ...activeFilterModal }
        isMultiSelect(updatedModal.selected) ? handleMultiSelected(updatedModal, index) : handleSelected(updatedModal, index)

        setFilterModals((prev) => ({
            ...prev,
            [updatedModal.mapping]: updatedModal
        }));

        setSearchParams((prev) => ({
            ...prev,
            [updatedModal.mapping]: isMultiSelect(updatedModal.selected) ? Object.values(updatedModal.selected).map(item => item.value) : updatedModal.selected.value
        }));

        setActiveFilterModal(updatedModal);

        if (searchParams.query.trim() == "") {
            console.log("No query! Please add a ui message!");
            return;
        }
        setTriggerSearch((prev: number) => prev + 1);
    }

    return (
        <>
            <FilterModal modal={activeFilterModal} handleFilterChange={handleFilterChange} handleOpen={handleOpen} isOpen={isOpen} />
            <Box sx={{ display: "flex", justifyContent: "center", width: "60%", px: 5 }}>
                <MenuButton onClick={() => handleOpen(key.mapping.sort)} title={filterModals[key.mapping.sort as keyof FilterModals].selected.label} />
                <MenuButton onClick={() => handleOpen(key.mapping.date)} title={filterModals[key.mapping.date as keyof FilterModals].selected.label} />
                <MenuButton onClick={() => handleOpen(key.mapping.employment)} title={"Employment Type"} />
            </Box>
        </>
    );
}

export default Filter;