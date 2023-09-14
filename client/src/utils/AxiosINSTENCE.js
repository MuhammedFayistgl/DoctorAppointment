import axios from "axios";

export const AxiosConnection = axios.create({
  baseURL: 'https://doctorappointment-qjkq.onrender.com',
  // baseURL: 'https://cute-plum-angler-cuff.cyclic.app',
  // Producton url 
  // baseURL: 'http://localhost:5000/',
  // mode: "cors",
  withCredentials: true, // should be there
  credentials: 'include', // should be there
  // headers: {
  //   Authorization: "Bearer " + document.cookie,
  // }
  headers: {
    Authorization: `Bearer ${document?.cookie}`,
  },

}
)
