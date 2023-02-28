import axios from "axios"
import url from "../url"

const makeRequest= axios.create({
    baseURL: url
})

export const getQuestions = async () => {
    return await makeRequest.get("/getQuestions").then(res => res.data)
} 
export const addQuestion = async (question) => {
    return await makeRequest.post("/postQuestion", question).then(res => res.data)
} 
export const deleteQuestion = async (id) => {
    return await makeRequest.delete(`/deleteQuestion/${id}`).then(res => res.data)
} 
export const updateQuestion = async (id, question) => {
    return await makeRequest.put(`/updateQuestion/${id}`, question).then(res => res.data)
} 
export const rateQuestion = async (id, question) => {
    return await makeRequest.put(`/rateQuestion/${id}`, question).then(res => res.data)
} 