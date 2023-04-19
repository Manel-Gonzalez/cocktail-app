import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import getCocktails from './services/getCocktails'
import Cocktail from './components/Cocktail'
import './App.css'
import CocktailCard from './components/Cocktail'

function App() {
  const [cocktails, setCocktails] = useState([])

  useEffect(function (){
    getCocktails({ keyword : 'bramble'}).then(cocktails => setCocktails(cocktails))
  },[])

  return (
    <div className="App">
        LOS COCTELES
        <section>
          {
            cocktails.map(singleCocktail => 
              <CocktailCard
               title={singleCocktail.strDrink}
               id={singleCocktail.idDrink}
               url={singleCocktail.strDrinkThumb}
               ing1={singleCocktail.strIngredient1}
               ing2={singleCocktail.strIngredient2} 
               ing3={singleCocktail.strIngredient3} 
               ing4={singleCocktail.strIngredient4} 
               ing5={singleCocktail.strIngredient5} />
              )
          }
        </section>
    </div>
  )
}

export default App


