import axios from "axios";
import { API } from "../utils/config";

//socials
export const insertSocial = (data) => {
        return axios.post(`${API}/create/social`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllSocial = () => {
    return axios.get(`${API}/getall/social`)
}


export const getSocialById = (id) => {
    return axios.get(`${API}/social/getsocialbyid/${id}`)
}

export const updateSocialById = (data,id) => {
    return axios.put(`${API}/update/social/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteSocialById = (id) => {
    return axios.delete(`${API}/social/deletebyid/${id}`)
}
