import { useEffect, useState, useContext } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import searchRandom from "../../services/searchRandom";
import CocktailContext from "../../context/CocktailContext"


export default function SearchRandom() {
    const { cocktails, setCocktails } = useContext(CocktailContext)

    /*     const [cocktails, setCocktails] = useState([])
     */
    useEffect(function () {
        searchRandom()
            .then(cocktails => {
                setCocktails(cocktails)
            }, searchRandom())
    }, [])

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}