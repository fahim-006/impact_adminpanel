import axios from "axios";
import { API } from "../utils/config";

export const insertGroup = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/group`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllGroup  = () => {
    return axios.get(`${API}/getall/group`)
}


export const getGroupById = (id) => {
    return axios.get(`${API}/group/${id}`)
}

export const updateGroupById = (data,id) => {
    return axios.put(`${API}/update/group/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteGroupById = (id) => {
    return axios.delete(`${API}/group/${id}`)
}
