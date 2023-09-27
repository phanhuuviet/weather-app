import axios from "axios";
import { API_KEY, PREFIX_API } from '../common/constants/index'

export const weatherAPI = {
    async fetchWeather() {
        const url = `${PREFIX_API}/data/2.5/forecast?units=metric&q=Hanoi&appid=${API_KEY}`;
        const res = await axios.get(url);
        return res.data;
    }
}