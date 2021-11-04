import axios from "axios";

/*
const ncsApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  auth: { username: "0c40248eeeff630d421291f8170075ac753d3abf", password: "" }
});


const ncsApi              = axios;
ncsApi.defaults.baseURL   = process.env.REACT_APP_API_URL;
*/


const api = axios.create({
  baseURL: "http://192.168.0.11:3333/api",
});

export default api;

//export default ncsApi;