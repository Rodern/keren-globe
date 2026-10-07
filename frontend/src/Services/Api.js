import axios from "axios";

const API = axios.create({
    baseURL: "http://api-kglobe.157.173.112.19.nip.io"
});

export default API;