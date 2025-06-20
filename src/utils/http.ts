import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'https://geek.itheima.net',
    timeout: 5000,
})

// 拦截器

httpInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

httpInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export { httpInstance }