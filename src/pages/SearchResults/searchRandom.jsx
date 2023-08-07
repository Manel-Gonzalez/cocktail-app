import { useEffect, useState, useContext } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import CocktailContext from "../../context/CocktailContext"
import { supabase } from "../../supabaseClient";


export default function SearchRandom() {

    const [drinks, setDrinks] = useState([])
    const [cocktails, setCocktails] = useState([])

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
        supabase.rpc("random_cocktail_id").then(res => setDrinks(res.data)).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getIngredients(drinks)
    }, [drinks])

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}