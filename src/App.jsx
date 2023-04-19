import { useEffect, useState } from 'react'
import { Link, Route } from 'wouter'
import './App.css'
import ListOfCocktails from './components/ListOfCocktails/ListOfCocktails'
import Home from './pages/Home/home'
import SearchResultsByBrowser from './pages/SearchResults/searchResultsByBrowser'
import SearchResultsByLetter from './pages/SearchResults/searchResultsByLetter'

function App() {

 return (
    <div className="App">
      <Link to='/'>
        <h1 className='title'>LOS CÓCTELE</h1>

      </Link>
      <section>
        <Route path='/' component={Home}/>
      </section>

      <section>
        <Route path='/search/:keyword' component={SearchResultsByBrowser}/>
      </section>

      <section>
        <Route path='/letter/:letter' component={SearchResultsByLetter}/>
      </section>
    </div>
  )
}

export default App






/*           {
            cocktails.map(singleCocktail => 
              <CocktailCard
              key={singleCocktail.idDrink}
              title={singleCocktail.strDrink}
              id={singleCocktail.idDrink}
              url={singleCocktail.strDrinkThumb}
              ing1={singleCocktail.strIngredient1}
              ing2={singleCocktail.strIngredient2} 
              ing3={singleCocktail.strIngredient3} 
              ing4={singleCocktail.strIngredient4} 
              ing5={singleCocktail.strIngredient5} 
              />
              )
          } */