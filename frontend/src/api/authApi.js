import axios from "axios"
import url from "../url"

const makeRequest= axios.create({
    baseURL: url
})

export const regiser = async (id) => {
    return await makeRequest.post(`/${id}`).then(res => res.data)
} 
export const login = async (id) => {
    return await makeRequest.post(`/${id}`).then(res => res.data)
} 
export const logout = async (id) => {
    return await makeRequest.post(`/${id}`).then(res => res.data)
} 