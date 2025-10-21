import React from "react";
import FilterModal from "./FilterModal";
import { Alert, Box } from "@mui/material";
import key from "../../../../models/constants.json";
import MenuButton from "./MenuButton";
import { FilterItem, FilterModals } from "../../../../models/types";
import { filterDateOptions, filterEmploymentOptions, filterJobPublisherOptions, sortByOptions } from "../../../../models/options";

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
            mapping: key.mapping.publisher,
            title: key.title.publisher,
            selected: [],
            options: filterJobPublisherOptions,
        },
        workFromHome: {
            mapping: key.mapping.remote,
            title: key.title.remote,
            selected: true,
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
        return modal;
    }

    const handleSelected = (modal: FilterItem, index: number) => {
        modal = {
            ...activeFilterModal,
            selected: activeFilterModal.options[index]
        }
        return modal;
    }

    const handleFilterChange = (index: number, triggerSearch: boolean = true) => {
        let updatedModal = { ...activeFilterModal }
        updatedModal = isMultiSelect(updatedModal.selected) ? handleMultiSelected(updatedModal, index) : handleSelected(updatedModal, index)

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
            return;
        }
        if (triggerSearch) {
            setTriggerSearch((prev: number) => prev + 1);
        }
    }

    const handleFilterToggle = (mapping: any,) => {
        let updatedModals = {
            ...filterModals,
            [mapping]: {
                ...filterModals[mapping as keyof FilterModals],
                selected: !filterModals[mapping as keyof FilterModals].selected
            }
        }

        setFilterModals(
            updatedModals
        );

        setSearchParams((prev) => ({
            ...prev,
            [mapping]: updatedModals[mapping as keyof FilterModals].selected
        }));
        setTriggerSearch((prev: number) => prev + 1);
    }

    return (
        <>
            <FilterModal modal={activeFilterModal} handleFilterChange={handleFilterChange} handleOpen={handleOpen} isOpen={isOpen} />
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', justifyItems: 'flex-start', width: { xs: "90%", md: "80%" }, px: 5 }}>
                <MenuButton onClick={() => handleOpen(key.mapping.sort)} title={filterModals[key.mapping.sort as keyof FilterModals].selected.label} />
                <MenuButton onClick={() => handleOpen(key.mapping.date)} title={filterModals[key.mapping.date as keyof FilterModals].selected.label} />
                <MenuButton onClick={() => handleOpen(key.mapping.employment)} title={"Employment Type"} />
                <MenuButton onClick={() => handleOpen(key.mapping.publisher)} title={"Job Publisher"} />
                <MenuButton title={"Remote Only"} isCheckbox={true} handleFilterToggle={handleFilterToggle} selected={filterModals[key.mapping.remote as keyof FilterModals].selected} />
            </Box>
        </>
    );
}

export default Filter;