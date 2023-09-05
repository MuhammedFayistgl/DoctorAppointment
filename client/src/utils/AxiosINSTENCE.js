import axios from "axios";

export const AxiosConnection = axios.create({
    baseURL: 'https://doctorappointment-64iw.onrender.com/',
    // production url
    // baseURL: 'http://localhost:5000',
    withCredentials: true

})
