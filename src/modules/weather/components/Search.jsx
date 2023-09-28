import React from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { options } from '../../../common/constants/options'

const Search = props => {
    const dispatch = useDispatch();

    const handleSubmit = (city) => {
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
                    borderRadius: "10px"
                }
            }}
            options={options}
            autoHighlight
            getOptionLabel={(option) => {
                return option.label
            }}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <span onClick={() => handleSubmit(option.label)} style={{ width: "100%", height: "100%" }} >{option.label}</span>
                </Box>
            )}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label="Choose a city"
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