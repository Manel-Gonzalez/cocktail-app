import { useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import getCocktailsByLetter from "../../services/searchByLetter"

export default function SearchResults({ params }) {
    const { letter } = params
    const [cocktails, setCocktails] = useState([])


    useEffect(function () {
        getCocktailsByLetter({ letter })
            .then(cocktails => {
                setCocktails(cocktails)
            }, [letter])
    })

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}