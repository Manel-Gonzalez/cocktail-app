import { useEffect, useState } from "react"
import { API_URL, API_ID } from "../services/settings";

import getCocktailsById from "../services/getById";
import CocktailDetail from "../pages/Detail/cocktailDetail";


export default function useCocktails(id, setData) {

    useEffect(function () {

        async function coso() {
            const apiURL = `${API_URL}/${API_ID}${id}`
            const res = await fetch(apiURL)
            await res.json().then(setData)
            console.log("1");
        }
        coso()
    }, [id, setData])

}



/* 
    useEffect(async function () {
        const apiURL = `${API_URL}/${API_ID}${id}`
        const res = await fetch(apiURL)
        console.log("result from useCocktails", res);

        const drinkDetail = await res.json()
        console.log("drink from useCocktails", drinkDetail);
    }, [id])

*/


/*
     useEffect(function () {

        async () => {

            const apiURL = `${API_URL}/${API_ID}${id}`
            const res = await fetch(apiURL)
            console.log("result from useCocktails", res);
    
            const drinkDetail = await res.json()
            console.log("drink from useCocktails", drinkDetail);
        }, [id]
    
        } 
        
*/


/* 


    useEffect(function () {
        getCocktailsById(id)
    }, [id])
*/

/* 
      TEST
-----------------
    const [data, setData] = useState(null)

    useEffect(function () {

        console.log('asdfasdf', id);

        async function coso() {
            const apiURL = `${API_URL}/${API_ID}${id}`
            const res = await fetch(apiURL)
            console.log("result from useCocktails", res);

            const drinkDetail = await res.json()
            console.log("drink from useCocktails", drinkDetail);
            return drinkDetail
        }
        coso()

    }, [id])

*/

/* 


    useEffect(function () {

        async function coso() {
            const apiURL = `${API_URL}/${API_ID}${id}`
            const res = await fetch(apiURL)
            console.log("result from useCocktails", res);
             
            await res.json().then(setData)
            console.log("1");
        }
        coso()
    }, [id])
*/

