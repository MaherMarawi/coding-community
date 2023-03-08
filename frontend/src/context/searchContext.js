import { createContext, useState } from "react"


export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {

    const [ value, setValue ] = useState()
    const [ isOpen, setIsOpen ] = useState(-70)


    const handleSubmit = (e) => {
        setValue(e)
    }


    return (
        <SearchContext.Provider value={{ value, handleSubmit, isOpen, setIsOpen }}>
            {children}
        </SearchContext.Provider>
    )
}