import axios from "axios"
import url from "../url"

const makeRequest= axios.create({
    baseURL: url
})

export const authRegiser = async (cred) => {
    return await makeRequest.post("/SignUP", cred).then(res => res.data)
} 
export const authLogin = async (cred) => {
    return await makeRequest.post("/Login", cred).then(res => res.data)
} 
export const authLogout = async (cred) => {
    return await makeRequest.get("/Logout", cred).then(res => res.data)
} 