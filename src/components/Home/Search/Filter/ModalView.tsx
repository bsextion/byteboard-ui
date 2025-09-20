import React from "react";
import { FilterItem } from "../../../../models/types";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

type ViewProps = {
    modal: FilterItem;
    handleFilterChange: (index: number, triggerSearch?: boolean) => void;
    handleTrigger?: () => void;
};


export const View: React.FC<ViewProps> = ({ modal, handleFilterChange }) =>
(
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={modal.selected.value}
        name="radio-buttons-group"
        onChange={(event) => {
            const index = modal.options.findIndex(option => option.value === event.target.value);
            if (index !== -1) {
                handleFilterChange(index);
            }
        }
        }
    >
        {modal.options.map((option, index) => (
            <FormControlLabel
                key={index}
                value={option.value}
                control={<Radio />}
                label={option.label}
            />
        ))}
    </RadioGroup>
)

export const MultiSelectView: React.FC<ViewProps> = ({ modal, handleFilterChange, handleTrigger }) =>
(
    <FormGroup>
        {modal.options.map((option, index) => (
            <FormControlLabel
                key={index}
                control={
                    <Checkbox
                        checked={
                            modal.selected.some((selected) => selected.value === option.value)
                        }
                        value={option.value}
                        onChange={(event) => {
                            const index = modal.options.findIndex(option => option.value === event.target.value);
                            if (index !== -1) {
                                handleFilterChange(index, false);
                            }
                        }}
                    />
                }
                label={option.label}
            />
            
        ))}
        <Box display="flex" justifyContent="end" mt={2}>
         <Button onClick={() => handleTrigger()} variant="contained" size="small" sx={{ mr: 1, bgcolor: '#38349F', '&:hover': { bgcolor: '#38349F' } }}>
              Apply
            </Button>
            </Box>
    </FormGroup>
)