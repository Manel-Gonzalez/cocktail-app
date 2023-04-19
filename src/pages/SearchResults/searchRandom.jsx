import { useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import searchRandom from "../../services/searchRandom";

export default function SearchRandom() {
    const [cocktails, setCocktails] = useState([])

    useEffect(function () {
        searchRandom()
            .then(cocktails => {
                setCocktails(cocktails)
            }, searchRandom())

    })

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}