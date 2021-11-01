import axios from "axios";
import { API } from "../utils/config";


//Buy APIS
export const insertBuy= (data) => {
    //alert(`${Object.keys (data)} = ${Object.values(data)}`);
        return axios.post(`${API}/create/buy`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const getAllBuy = () => {
    return axios.get(`${API}/getall/buy`)
}


export const getBuyById = (id) => {
    return axios.get(`${API}/buy/${id}`)
}

export const updateBuyById = (data,id) => {
    return axios.put(`${API}/update/buy/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteBuyById = (id) => {
    return axios.delete(`${API}/buy/${id}`)
}
