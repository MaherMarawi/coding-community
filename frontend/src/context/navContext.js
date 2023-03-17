import { createContext, useState, useEffect, useContext } from "react"
import { DarkModeContext } from "./darkModeContext"

export const NavigatorContext = createContext()

export const NavigatorContextProvider = ({children}) => {

    const [ activeTab, setActiveTab ] = useState(localStorage.getItem("nav") || "/")

    const handleActiveTab = (e) => {
        setActiveTab(e.target.getAttribute("name"))
    }
    
    useEffect(() => {
        localStorage.setItem("nav", activeTab)
    }, [activeTab]);

    return (
        <NavigatorContext.Provider value={{  activeTab, setActiveTab, handleActiveTab  }}>
            {children}
        </NavigatorContext.Provider>
    )
}