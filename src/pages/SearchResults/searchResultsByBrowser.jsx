import { useContext, useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
/* import getCocktailsByBrowser from "../../services/getByBrowser" */
import CocktailContext from "../../context/CocktailContext"
import { supabase } from "../../supabaseClient";

export default function SearchResultsByBrowser({ params }) {
    const { keyword } = params
    const [drinks, setDrinks] = useState([])
    /*    const [ingredients, setIngredients] = useState({ 'ingredient': {} }) */
    const [fetcherror, setfetchError] = useState([])
    let cocktails = []

    /*     let ingredients = { 'ingredient': {} }
    */

    const getIngredients = async (cocktailData) => {
        const ingredients = []
        cocktails = [...cocktailData]
        console.log('holi');
        for (let i = 0; i < cocktailData.length; i++) {
            console.log('cocktaildata de i-', cocktailData[i]);
            async function getIngredientsFromId() {
                const { data, error } = await supabase.rpc("ingredients_from_cocktail_id", { id: cocktailData[i].id })
                if (error) {
                    setfetchError('test')
                    /*                  setIngredients(null) */
                    console.log(error)
                }
                if (data) {
                    setfetchError('test')
                    console.log('dataIngredient', data);
                    ingredients.push(data)
                }
            }
            getIngredientsFromId()
            console.log('asdf');
            for (let j = 0; j <= ingredients.length; j++) {
                console.log('holi2');
                cocktails[i].push(ingredients[j])
            }
        }
        console.log('ingredients', ingredients);

    }

    /* 
                        drinks.find((cocktailID) => {
                            console.log('cocktailId', cocktailID);
                            if (cocktailID.id === cocktail.id) {
                                cocktails.push(data)
                                console.log('cocktails2', cocktails);
                            }
                        })
    */
    useEffect(() => {
        async function getCocktailsFromBrowser() {
            const { data, error } = await supabase.rpc("cocktails_id_from_browser", { keyword: keyword })

            if (error) {
                setfetchError('test')
                setDrinks(null)
                console.log(error)
            }
            if (data) {
                setDrinks(data)
                setfetchError('test')
                getIngredients(data)
            }
        }
        getCocktailsFromBrowser()
    }, [keyword])

    /*     console.log('drinks', cocktails);
     */
    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}

/*  
useEffect(() => {
    cocktails_id.map((id) => {
        async function getIngredientsFromId() {
            const { data, error } = await supabase.rpc("ingredients_from_cocktail_id", { id: id })
            if (error) {
                setfetchError('test')
                setIngredients(null)
                console.log(error)
            }
            if (data) {
                setIngredients(data)
                setfetchError('test')
            }
        }
        getIngredientsFromId()
    }, [])
})

 console.log('ingredients', ingredients);
*/

/* 
    cocktail = 
    {
        d_id
        d_name
        d_img
        d_dresc_en
        d_dresc_es
        d_dresc_ita
        d_dresc_de
        d_dresc_fr

        ingredients = {

            ingrdient1={
                name=Gin
                measure=1oz
            }
            ingrdient2={
                name=Gin
                measure=1oz
            }
            ingrdient3={
                name=Gin
                measure=1oz
            }
            ingrdient4={
                name=Gin
                measure=1oz
            }
        }


            cocktail = 
    {
        d_id
        d_name
        d_img
        d_dresc_en
        d_dresc_es
        d_dresc_ita
        d_dresc_de
        d_dresc_fr

        ingredients = {

            ingrdient1={
                name=Gin
                measure=1oz
            }
            ingrdient2={
                name=Gin
                measure=1oz
            }
            ingrdient3={
                name=Gin
                measure=1oz
            }
            ingrdient4={
                name=Gin
                measure=1oz
            }
        }
        



    }



*/

/* 


*/


/* 
            const { data, error } = await supabase
                .from('dim_cocktails_ingredients')
                .select('*')
                .or("drink_name.eq.Margarita, ingredient_name.eq.Margarita")

*/


/* 

    return <>
        {cocktails && (
            <div>Funsiona</div>
        )}
    </>

*/



