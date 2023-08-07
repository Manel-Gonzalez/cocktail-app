import { useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import { supabase } from "../../supabaseClient";

export default function SearchResultsByBrowser({ params }) {
    let { keyword } = params
    const [drinks, setDrinks] = useState([])
    const [cocktails, setCocktails] = useState({})

    const getIngredients = async (cocktailData) => {
        const dataFull = drinks.map(async drink => {
            const { data } = await supabase.rpc("ingredients_from_cocktail_id", { id: drink.id })
            const newData = { ...drink, ingredients: data }
            return newData
        })

        const dataPromise = await Promise.all(dataFull)

        setCocktails(dataPromise)
    }


    useEffect(() => {
        supabase.rpc("cocktails_id_from_browser", { keyword }).then(res => setDrinks(res.data)).catch(err => console.log(err))
    }, [keyword])


    useEffect(() => {
        getIngredients(drinks)
    }, [drinks])

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}