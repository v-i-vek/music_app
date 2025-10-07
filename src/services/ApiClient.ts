import axios from "axios";
import { BASE_URL } from "../constants/endpoint";
import { useNavigate } from "react-router-dom";



const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000
})

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {
            const navigate = useNavigate()
            navigate('/login');
            console.warn("Unauthorized! Redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export default apiClient;
