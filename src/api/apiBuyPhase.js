import axios from "axios";
import { API } from "../utils/config";


//Buy APIS
export const insertBuyPhase= (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/buyphase`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllbuyphase = () => {
    return axios.get(`${API}/getall/buyphase`)
}


export const getbuyphaseById = (id) => {
    return axios.get(`${API}/buyphase/${id}`)
}

export const updatebuyphaseById = (data,id) => {
    return axios.put(`${API}/update/buyphase/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deletebuyphaseById = (id) => {
    return axios.delete(`${API}/buyphase/${id}`)
}
