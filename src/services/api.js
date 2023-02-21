import axios from "axios";


const url = {
    baseUrl: "http://localhost:3000/",
    login: "/login",
    signup: "/signup",
    register: "/register",
};

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

const api = {
    url,
    instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    patch: instance.patch,
    delete: instance.delete,
}

export default api;