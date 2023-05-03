import { useEffect, useState } from 'react'
import { Link, Route } from 'wouter'
import './App.css'
import Home from './pages/Home/home'
import SearchResultsByBrowser from './pages/SearchResults/searchResultsByBrowser'
import SearchResultsByLetter from './pages/SearchResults/searchResultsByLetter'
import SearchRandom from './pages/SearchResults/searchRandom'
import SearchCommonResults from './pages/SearchResults/searchCommon'
import SearchResultsByID from './pages/SearchResults/searchByID'
import Context from './context/StaticContext'
import CocktailDetail from './pages/Detail/cocktailDetail'
import { CocktailContextProvider } from './context/CocktailContext'
import ListABC from "./components/ListABC/ListABC"
import Browser from "./components/Browser/Browser"
import CommonBevarages from "./components/CommonBevarages/Common"


function App() {

  return (
    <Context.Provider value={{ name: "asdf" }}>
      <div className="App">
        <Link to='/'>
          <h1 className='title'>LOS CÓCTELE</h1>

        </Link>
        <Browser />
        <ListABC />
        <CommonBevarages />

        <CocktailContextProvider>
          <Route path='/' />

          <Route path='/search/:keyword' component={SearchResultsByBrowser} />

          <Route path='/letter/:letter' component={SearchResultsByLetter} />

          <Route path='/random' component={SearchRandom} />

          <Route path='/bevarage/:bevarages' component={SearchCommonResults} />

          <Route path='/cocktail/:id' component={CocktailDetail} />
        </CocktailContextProvider>
      </div>
    </Context.Provider>
  )
}

export default App




