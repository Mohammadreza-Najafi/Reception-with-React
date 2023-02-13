import React, { useState, useEffect,useContext,useCallback} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchTerm] = useState('a')
    const [receptions,setReceptions] = useState([])

    const fetchDrinks = useCallback(async () =>{
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data

            if(drinks){
                const tempReceptions = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass
                    }= item
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setReceptions(tempReceptions)
            }else {
                setReceptions([])
            }//end of if

            setLoading(false)

        }catch (error){
            setLoading(false)
        }//end of try_catch

    },[searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm,fetchDrinks])

    return (
        <AppContext.Provider
            value={{
                loading,receptions,searchTerm,setSearchTerm
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