import { useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import searchCommonBevarages from "../../services/searchCommonBevarages";

export default function SearchCommonResults({ params }) {
    const { bevarages } = params
    const [cocktails, setCocktails] = useState([])


    useEffect(function () {
        searchCommonBevarages({ bevarages })
            .then(cocktails => {
                setCocktails(cocktails)
            }, [bevarages])
    })

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}