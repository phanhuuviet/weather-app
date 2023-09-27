import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { weatherGetError, weatherGetSuccess } from './weatherSlice'
import { weatherAPI } from "../../../services/weatherAPI";

function* getWeather(action) {
    try {
        const res = yield call(weatherAPI.fetchWeather);
        yield put(weatherGetSuccess(res))
    } catch (error) {
        yield put(weatherGetError(error))
    }
}

export function* watchGetWeather() {
    yield takeLatest("GET_WEATHER", getWeather);
}