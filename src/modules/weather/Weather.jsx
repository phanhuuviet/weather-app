import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import './styles/Weather.scss'
import "swiper/css";
import WeatherForecastItem from './components/WeatherForecastItem';
import { useDispatch, useSelector } from 'react-redux';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import Search from './components/Search';
import { changeError } from './redux/weatherSlice';


const Weather = props => {
    const forecasts = useSelector((state) => state.weather.forecast);
    const currentWeather = useSelector((state) => state.weather.currentWeather);
    const isLoading = useSelector((state) => state.weather.isLoading);
    const error = useSelector((state) => state.weather.error)
    const dispatch = useDispatch();

    const handleChangeError = () => {
        dispatch(changeError());
    }

    return (
        <div className='wrapper'>
            {isLoading && !error ? <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop> : <>
                <Search />
                <img src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`} alt={currentWeather?.weather?.description} />
                <div className='wrapper-current-weather'>
                    <h2>{forecasts?.city?.name}</h2>
                    <div className='current-temperature'>{currentWeather?.main?.temp.toFixed(0)} °C</div>
                    <div className='current-description'>{currentWeather?.weather[0]?.description}</div>
                    <div>
                        <div className='current-environment'><span><AirIcon /></span><span>Wind</span> <span>|</span> <span>{currentWeather?.wind?.speed}m/s</span></div>
                        <div className='current-environment'><span><WaterDropIcon /></span><span>Hum</span> <span>|</span> <span>{currentWeather?.main?.humidity}%</span></div>
                    </div>

                </div>
                <div className='wrapper-weather-forecast'>
                    <div className='weather-forecast'>
                        <Swiper slidesPerView={5} spaceBetween={20} className="mySwiper">
                            {forecasts?.list.map((forecast, index) => {
                                return <SwiperSlide key={index}><WeatherForecastItem data={forecast} /></SwiperSlide>
                            })}

                        </Swiper>
                    </div>
                </div>
            </>}
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={!!error}
                onClose={handleChangeError}
                autoHideDuration={1200}
                sx={{ mt: 4 }}
            >
                <Alert onClose={handleChangeError} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};


export default Weather;