import axios from "axios";

export const AxiosConnection = axios.create({
    baseURL: 'https://doctorappointment-64iw.onrender.com/',
    // Producton url 
    // baseURL: 'http://localhost:5000/',
    mode: "cors",
    withCredentials: true, // should be there
    credentials: 'include' // should be there
})
