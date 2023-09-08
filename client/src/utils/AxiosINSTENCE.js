import axios from "axios";

export const AxiosConnection = axios.create({
    baseURL: 'https://doctorappointment-64iw.onrender.com/',
    // headers: {
    //     Accept: "applicaiton/json",
    //     "Content-Type": "application/json",
    // },
    // withCredentials: true, // should be there
    // credentials: 'include' // should be there
})
