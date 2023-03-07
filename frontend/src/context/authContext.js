import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react"
import { authLogin, authLogout, authRegiser } from "../api/authApi";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    // const [rePasswordError, setRePasswordError] = useState("")
    
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
        setCurrentUser(data.user)
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("token", data.accessToken)
    }
    const errorSet = (err) => {
        if (err.email) setEmailError(err.email)
        else setPasswordError(err.password)
        setTimeout(() => {
            setEmailError("")
            setPasswordError("")
            // setRePasswordError("")
        }, 3000);
    }
    
    return (
        <AuthContext.Provider value={{ currentUser, emailError, passwordError, loginMutation, registerMutation, logoutMutation }}>
            {children}
        </AuthContext.Provider>
    )
}


