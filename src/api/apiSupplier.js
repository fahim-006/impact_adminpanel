import axios from "axios";
import { API } from "../utils/config";

export const insertSupplier = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/supplier`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllSupplier = () => {
    return axios.get(`${API}/getall/supplier`)
}


export const getSupplierById = (id) => {
    return axios.get(`${API}/supplier/${id}`)
}

export const updateSupplierById = (data,id) => {
    return axios.put(`${API}/update/supplier/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteSupplierById = (id) => {
    return axios.delete(`${API}/supplier/${id}`)
}


//api terms and conditions

export const insertTerms = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/term`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllTerms = () => {
    return axios.get(`${API}/getall/term`)
}


export const getTermsById = (id) => {
    return axios.get(`${API}/term/${id}`)
}

export const updateTermsById = (data,id) => {
    return axios.put(`${API}/update/term/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteTermsById = (id) => {
    return axios.delete(`${API}/term/${id}`)
}
