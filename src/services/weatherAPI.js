import axios from "axios";
import { API_KEY, PREFIX_API } from '../common/constants/index'

export const weatherAPI = {
    async fetchWeather(params) {
        const url = `${PREFIX_API}/data/2.5/forecast`;

        const res = await axios.get(url, {
            params: {
                units: "metric",
                lang: "vi",
                appid: API_KEY,
                ...params,
            }
        });
        return res.data;
    }
}