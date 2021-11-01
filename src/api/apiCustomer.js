import axios from "axios";
import { API } from "../utils/config";

export const insertCustomer = (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/customer`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllCustomers = () => {
    return axios.get(`${API}/get/allCustomers`)
}


export const getcustomersById = (id) => {
    return axios.get(`${API}/customer/${id}`)
}

export const updateCustomerById = (data,id) => {
    return axios.put(`${API}/update/customer/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteCustomerById = (id) => {
    return axios.delete(`${API}/customer/${id}`)
}
