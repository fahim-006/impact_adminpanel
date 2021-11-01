import axios from "axios";
import { API } from "../utils/config";

export const insertShelf = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/shelf`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllShelf   = () => {
    return axios.get(`${API}/getall/shelf`)
}


export const getShelfById = (id) => {
    return axios.get(`${API}/shelf/${id}`)
}

export const updateShelfById = (data,id) => {
    return axios.put(`${API}/update/shelf/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteShelfById = (id) => {
    return axios.delete(`${API}/shelf/${id}`)
}
