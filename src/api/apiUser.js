import axios from "axios";
import { API } from "../utils/config";

export const insertUser = (data) => {
    return axios.post(`${API}/user/register`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllUsers = () => {
    return axios.get(`${API}/get/allusers`)
}

export const getUsersById = (id) => {
    return axios.get(`${API}/users/${id}`)
}

export const updateUserById = (data,id) => {
    return axios.put(`${API}/update/users/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteUserById = (id) => {
    return axios.delete(`${API}/users/${id}`)
}

