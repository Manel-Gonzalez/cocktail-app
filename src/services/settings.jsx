export const API_URL = "https://www.thecocktaildb.com/api/json/v1/1"

export const API_SEARCH ="/search.php?s="
export const API_FIRST_LETTER ="/search.php?f="
export const API_RANDOM ="/random.php"

/* 
/* const fromApiResponseToCocktails = apiResponse => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
      const cocktails = data.map(cocktailInfo => {
        const {strDrinkThumb, strDrink, idDrink} = cocktailInfo
        console.log('coso',strDrinkThumb)
        return { strDrink, idDrink, strDrinkThumb }
      })
      return cocktails
    }
    return []
} */


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




