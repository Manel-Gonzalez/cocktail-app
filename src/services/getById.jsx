import { API_URL, API_ID } from "./settings";

export default async function getCocktailsById(id = "11007") {
    const apiURL = `${API_URL}/${API_ID}${id}`
    const res = await fetch(apiURL)
    const drink = await res.json()

    console.log(drink.drinks[0].strDrink, 'title from getByiD')
    return drink
}
