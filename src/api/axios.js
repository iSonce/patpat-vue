import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.2.212:8199/lmw",
    timeout: 1000
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