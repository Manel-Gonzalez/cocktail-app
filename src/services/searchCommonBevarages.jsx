import { API_URL, API_BEVARAGE } from "./settings";

const fromApiResponseToCocktails = apiResponse => {
    const { drinks = [] } = apiResponse
    if (Array.isArray(drinks)) {
        const cocktails = drinks.map(cocktailInfo => {
            const { strDrinkThumb, strDrink, idDrink } = cocktailInfo
            return { strDrinkThumb, strDrink, idDrink }
        })
        return cocktails
    }
    return []
}

export default function searchCommonBevarages({
    bevarages = "vodka"
} = {}) {
    const apiURL = `${API_URL}/${API_BEVARAGE}${bevarages}`

    return fetch(apiURL)
        .then((res) => res.json())
        .then(fromApiResponseToCocktails)
}