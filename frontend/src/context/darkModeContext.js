import { createContext, useState, useEffect, useMemo } from "react"

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    
    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false)
    

    // const darkMode = useMemo(JSON.parse(localStorage.getItem("")) || false)

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode]);


    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    )
}


//JSON.parse(localStorage.getItem("darkMode"))