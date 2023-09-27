import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import './styles/Weather.scss'
import "swiper/css";
import WeatherForecastItem from './components/WeatherForecastItem';
import { useSelector } from 'react-redux';


const Weather = props => {
    const forecasts = useSelector((state) => state.weather.forecast);
    const currentWeather = useSelector((state) => state.weather.currentWeather);

    console.log(currentWeather);

    return (
        <div className='wrapper'>
            <img src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`} alt={currentWeather?.weather?.description} />
            <div className='wrapper-current-weather'>
                <h2>{forecasts?.city?.name}</h2>
                <div className='current-temperature'>{currentWeather?.main?.temp.toFixed(0)} °C</div>
                <div className='current-description'>{currentWeather?.weather[0]?.main}</div>
                <div>
                    <div className='current-environment'><span>Wind</span> <span>|</span> <span>{currentWeather?.wind?.speed}m/s</span></div>
                    <div className='current-environment'><span>Hum</span> <span>|</span> <span>{currentWeather?.main?.humidity}%</span></div>
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
        </div>
    );
};


export default Weather;