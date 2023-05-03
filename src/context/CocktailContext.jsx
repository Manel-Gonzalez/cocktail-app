import React, { useState } from "react";

const Context = React.createContext({})

export function CocktailContextProvider({ children }) {
    const [cocktails, setCocktails] = useState([])
    return <Context.Provider value={{ cocktails, setCocktails }}>
        {children}
    </Context.Provider>
}

export default Context