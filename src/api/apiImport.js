import axios from "axios";
import { API } from "../utils/config";

export const insertImport = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/imports`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllImport = () => {
    return axios.get(`${API}/getall/imports`)
}


export const getImportById = (id) => {
    return axios.get(`${API}/imports/${id}`)
}

export const updateImportById = (data,id) => {
    return axios.put(`${API}/update/imports/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteImportById = (id) => {
    return axios.delete(`${API}/imports/${id}`)
}


//api of Policies
export const insertPolicy = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/policy`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllPolicy = () => {
    return axios.get(`${API}/getall/policy`)
}


export const getPolicyById = (id) => {
    return axios.get(`${API}/policy/${id}`)
}

export const updatePolicyById = (data,id) => {
    return axios.put(`${API}/update/policy/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deletePolicyById = (id) => {
    return axios.delete(`${API}/policy/${id}`)
}
