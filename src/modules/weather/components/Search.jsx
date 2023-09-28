import React, { useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { options } from '../../../common/constants/options'

const Search = props => {
    const [currentOption, setCurrentOption] = useState("");
    const dispatch = useDispatch();
    const currentWeather = useSelector((state) => state.weather);

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
                }, "& li": {
                    padding: "0px",
                    backgroundColor: "#000"
                }
            }}
            open={true}
            options={options}
            autoHighlight
            getOptionLabel={(option) => {
                return option.label
            }}
            renderOption={(props, option) => (
                <Box component="li" sx={{

                }} {...props}>
                    <div onClick={() => handleSubmit(option.label)} style={{ width: "100%", height: "100%" }} >{option.label}</div>
                </Box>
            )}
            renderInput={(params) => {
                console.log(params);
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