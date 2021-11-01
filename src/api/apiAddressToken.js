import axios from "axios";
import { API } from "../utils/config";


//Buy APIS
export const insertToken= (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/tokenpage`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllToken = () => {
    return axios.get(`${API}/getall/tokenpage`)
}


export const getTokenById = (id) => {
    return axios.get(`${API}/tokenpage/${id}`)
}

export const updateTokenById = (data,id) => {
    return axios.put(`${API}/update/tokenpage/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteTokenById = (id) => {
    return axios.delete(`${API}/tokenpage/${id}`)
}
