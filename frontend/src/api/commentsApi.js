import axios from "axios"
import url from "../url"

const makeRequest= axios.create({
    baseURL: url
})

export const getComments = async (id) => {
    return await makeRequest.get(`getComments/${id}`).then(res => res.data)
} 
export const addComment = async (id, comment) => {
    return await makeRequest.post(`postComment/${id}`, comment).then(res => res.data)
} 
export const deleteComment = async (id) => {
    return await makeRequest.delete(`deleteComment/${id}`).then(res => res.data)
} 
export const updateComment = async (id, commrnt) => {
    return await makeRequest.put(`updateComment/${id}`, commrnt).then(res => res.data)
} 