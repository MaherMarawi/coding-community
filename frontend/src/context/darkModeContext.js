import { createContext, useState, useEffect, useContext } from "react"
import { NavigatorContext } from "./navContext";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    
    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false)
    const { activeTab, setActiveTab } = useContext(NavigatorContext)


    const toggle = () => {
        setDarkMode(!darkMode)
        console.log(localStorage.getItem("nav"))
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