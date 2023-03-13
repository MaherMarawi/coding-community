import axios from "axios"
import url from "../url"

const makeRequest= axios.create({
    baseURL: url
})

export const getUsers = async () => {
    return await makeRequest.get("/getUsers").then(res => res.data)
} 
export const deleteUser = async (id) => {
    return await makeRequest.delete(`/deleteUser/${id}`).then(res => res.data)
} 
export const updateUser = async (id, user) => {
    return await makeRequest.put(`/updateUser/${id}`, user).then(res => res.data)
} 
export const setRole = async (id, role) => {
    return await makeRequest.put(`/setRole/${id}`, role).then(res => res.data)
} 
