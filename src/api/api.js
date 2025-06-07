import axios from "axios";

const BASE_URL = import.meta.env.SERVER_BASE_URL || "http://localhost:8000/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;