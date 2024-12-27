import axios from "axios";

// 60455-001/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;