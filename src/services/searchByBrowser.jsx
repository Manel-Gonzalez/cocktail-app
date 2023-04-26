import { API_URL, API_SEARCH } from "./settings"

const fromApiResponseToCocktails = apiResponse => {
  const { drinks = [] } = apiResponse
  if (Array.isArray(drinks)) {
    const cocktails = drinks.map(cocktailInfo => {
      const { strDrinkThumb, strDrink, idDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = cocktailInfo
      return { strDrink, idDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 }
    })
    return cocktails
  }
  return []
}

export default function searchCocktails({
  keyword = "old"
} = {}) {
  const apiURL = `${API_URL}/${API_SEARCH}${keyword}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToCocktails)
}
