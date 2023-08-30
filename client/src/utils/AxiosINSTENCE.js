import axios from "axios";

export const AxiosConnection = axios.create({
    baseURL: 'http://localhost:5000/'
})