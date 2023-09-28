import React, { useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { options } from '../../../common/constants/options'

const Search = props => {
    const [currentOption, setCurrentOption] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (city) => {
        setCurrentOption(city);
        dispatch({
            type: "GET_WEATHER",
            payload: {
                q: city
            }
        })
    }

    return (
        <Autocomplete
            id="City-select-demo"
            sx={{
                width: "100%", "& .MuiInputBase-root": {
                    borderRadius: "10px",
                }
            }}
            options={options}
            autoHighlight
            getOptionLabel={(option) => {
                return option.label
            }}
            renderOption={(props, option) => (
                <Box component="li" {...props}>
                    <div onClick={() => handleSubmit(option.label)} style={{ width: "100%", height: "100%", padding: "8px 16px" }} >{option.label}</div>
                </Box>
            )}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label={currentOption || "Choose a city"}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: "off", // disable autocomplete and autofill
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !params.inputProps['aria-expanded']) {
                                handleSubmit(params.inputProps.value);
                            }
                        }}
                    />
                )
            }}

        />
    );
};

export default Search;