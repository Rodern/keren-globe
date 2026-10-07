import axios from "axios";

const API = axios.create({
    baseURL: "http://157.173.112.19:5000"
});

export default API;