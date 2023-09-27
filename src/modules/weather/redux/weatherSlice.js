import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: "",
    forecast: null,
    currentWeather: null
}

export const weatherSlice = createSlice({
    name: 'weathers',
    initialState,
    reducers: {
        weatherGetSuccess: (state, action) => {
            state.error = "";
            state.forecast = action.payload;
            state.currentWeather = action.payload.list[0];
        },
        weatherGetError: (state, action) => {
            state.error = "Co loi xay ra!";
        },
        changeWeatherCurrent: (state, action) => {
            console.log(action.payload);
            state.currentWeather = action.payload;
        }
    },
})

export const { weatherGetSuccess, weatherGetError, changeWeatherCurrent } = weatherSlice.actions

export default weatherSlice.reducer