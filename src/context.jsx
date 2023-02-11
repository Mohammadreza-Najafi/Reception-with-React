import React,{useContext, useState} from "react";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchTerm] = useState('a')
    const [receptions,setReceptions] = useState()

    return (
        <AppContext.Provider
            value={{
                loading,
                searchTerm,
                receptions,
                setSearchTerm
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}