import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react"
import { authLogin, authLogout, authRegiser } from "../api/authApi";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [error, setError] = useState("")
    // const login = ( cred ) => {
    //     loginMutation.mutate(cred)
    // }
    // const register = (cred) => {
    //     registerMutation.mutate(cred)
    // }
    const logout = () => {
        logoutMutation.mutate()
    }
    const loginMutation = useMutation({
        mutationFn: (cred) => authLogin(cred),
        onSuccess: data => {
            dataSet(data)
        },
        onError: err => {
            errorSet(err)
        }
    })
    const registerMutation = useMutation({
        mutationFn: (cred) => authRegiser(cred),
        onSuccess: data => {
            dataSet(data)
        },
        onError: err => {
            errorSet(err)
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
        if (err.response.data.errors.email) er = setError(err.response.data.errors.email)
        else setError(err.response.data.errors.password)
        setTimeout(() => {
            setError("")
        }, 3000);
    }
    const logoutMutation = useMutation({
        mutationFn: () => authLogout(),
        onSuccess: () => {
            setCurrentUser()
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    })

    // useEffect(() => {
    //     // localStorage.setItem("user", JSON.stringify(currentUser))
    //     console.log(localStorage.getItem("user"))
    // }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, error, loginMutation, registerMutation, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


