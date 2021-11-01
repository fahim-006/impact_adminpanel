import axios from "axios";
import { API } from "../utils/config";

export const insertCategory = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/category`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllCategory  = () => {
    return axios.get(`${API}/getall/category`)
}


export const getCategoryById = (id) => {
    return axios.get(`${API}/category/${id}`)
}

export const updateCategoryById = (data,id) => {
    return axios.put(`${API}/update/category/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteCategoryById = (id) => {
    return axios.delete(`${API}/category/${id}`)
}


//cause

export const insertCause = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/cause`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllCause  = () => {
    return axios.get(`${API}/getall/cause`)
}


export const getCauseById = (id) => {
    return axios.get(`${API}/cause/${id}`)
}

export const updateCauseById = (data,id) => {
    return axios.put(`${API}/update/cause/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteCauseById = (id) => {
    return axios.delete(`${API}/cause/${id}`)
}
