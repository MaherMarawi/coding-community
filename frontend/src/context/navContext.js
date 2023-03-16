import { createContext, useState } from "react"

export const NavigatorContext = createContext()

export const NavigatorContextProvider = ({children}) => {

    const [ activeTab, setActiveTab ] = useState()
    // const [ isOpen, setIsOpen ] = useState(0)

    const handleActiveTab = (e) => {
        setActiveTab(e.target.getAttribute("name"))
    }


    return (
        <NavigatorContext.Provider value={{  activeTab, setActiveTab, handleActiveTab  }}>
            {children}
        </NavigatorContext.Provider>
    )
}