import axios from "axios";
import config from "./config";

const instance = axios.create({
    baseURL: config.url, //后端提供的地址
    timeout: 3000
});

instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            console.log('error');
            return Promise.reject(error.response)
        }
    }
)

export default instance