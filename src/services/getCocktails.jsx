import { API_URL } from "./settings"

export default function searchCocktails({
  keyword = "margarita"
  } = {}) {
      const apiURL = `${API_URL}/search.php?s=${keyword}`

      return fetch(apiURL)
      .then((res) => res.json())
      .then(response => {
        const {drinks = []} = response
        if (Array.isArray(drinks)) {
        const cocktails = drinks.map(cocktailInfo => {
          const {strDrinkThumb, strDrink, idDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = cocktailInfo
          return { strDrink, idDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5}
        })
        return cocktails
        }
      })
}




/* 
export default function searchCocktails({
    keyword = "margarita"
    } = {}) {
        const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`

        return fetch(apiURL)
        .then((res) => res.json())
        .then(response => {
          const {drinks = []} = response
          if (Array.isArray(drinks)) {
          const cocktails = drinks.map(cocktailInfo => {
            const {strDrinkThumb, strDrink, idDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = cocktailInfo
            return { strDrink, idDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5}
          })
          return cocktails
          }
        })
}

*/