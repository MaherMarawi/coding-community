import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react"
import { authLogin, authLogout, authRegiser } from "../api/authApi";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [error, setError] = useState("")
    
    const loginMutation = useMutation({
        mutationFn: (cred) => authLogin(cred),
        onSuccess: data => {
            dataSet(data)
        },
        onError: err => {
            errorSet(err.response.data.errors)
        }
    })
    const registerMutation = useMutation({
        mutationFn: (cred) => authRegiser(cred),
        onSuccess: data => {
            dataSet(data)
        },
        onError: err => {
            errorSet(err.response.data.errors)
        }
    })
    const logoutMutation = useMutation({
        mutationFn: () => authLogout(),
        onSuccess: () => {
            setCurrentUser()
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    })
    const dataSet = (data) => {
        setError("")
        setCurrentUser(data.user)
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("token", data.accessToken)
    }
    const errorSet = (err) => {
        let er = ""
        if (err.email) er = setError(err.email)
        else setError(err.password)
        setTimeout(() => {
            setError("")
        }, 3000);
    }
    
    return (
        <AuthContext.Provider value={{ currentUser, error, loginMutation, registerMutation, logoutMutation }}>
            {children}
        </AuthContext.Provider>
    )
}


