import { useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import getCocktailsByBrowser from "../../services/searchByBrowser"

export default function SearchResultsByBrowser({ params }) {
    const { keyword } = params
    const [cocktails, setCocktails] = useState([])

    useEffect(function () {
        getCocktailsByBrowser({ keyword })
            .then(cocktails => {
                setCocktails(cocktails)
            }, [keyword])

    })

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}