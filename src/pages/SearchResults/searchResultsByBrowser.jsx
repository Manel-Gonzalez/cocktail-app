import { useContext, useEffect, useState } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
/* import getCocktailsByBrowser from "../../services/getByBrowser" */
import CocktailContext from "../../context/CocktailContext"
import { supabase } from "../../supabaseClient";

export default function SearchResultsByBrowser({ params }) {
    const { keyword } = params

    const [cocktails, setCocktails] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [fetcherror, setfetchError] = useState([])

    useEffect(() => {
        async function getCocktailsFromBrowser() {
            const { data, error } = await supabase.rpc("cocktails_id_from_browser", { keyword: keyword })

            if (error) {
                setfetchError('test')
                setCocktails(null)
                console.log(error)
            }
            if (data) {
                setCocktails(data)
                setfetchError('test')
            }
        }
        getCocktailsFromBrowser()
    }, [keyword])

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}


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



/*     console.log('cocktails', cocktails);
   */
/*     const cocktails_id = cocktails.map((cocktail) => cocktail.id)
 
    console.log('id', cocktails_id); */

/*     useEffect(() => {
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
 */
/*     console.log('ingredients', ingredients);
 */