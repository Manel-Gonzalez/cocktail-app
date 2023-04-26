import { useEffect, useState } from 'react'
import { Link, Route } from 'wouter'
import './App.css'
import ListOfCocktails from './components/ListOfCocktails/ListOfCocktails'
import Home from './pages/Home/home'
import SearchResultsByBrowser from './pages/SearchResults/searchResultsByBrowser'
import SearchResultsByLetter from './pages/SearchResults/searchResultsByLetter'
import SearchRandom from './pages/SearchResults/searchRandom'
import SearchCommonResults from './pages/SearchResults/searchCommon'
import Context from './context/StaticContext'

function App() {

  return (
    <Context.Provider >
      <div className="App">
        <Link to='/'>
          <h1 className='title'>LOS CÓCTELE</h1>

        </Link>
        <section>
          <Route path='/' component={Home} />
        </section>

        <section>
          <Route path='/search/:keyword' component={SearchResultsByBrowser} />
        </section>

        <section>
          <Route path='/letter/:letter' component={SearchResultsByLetter} />
        </section>

        <section>
          <Route path='/random' component={SearchRandom} />
        </section>

        <section>
          <Route path='/bevarage/:bevarages' component={SearchCommonResults} />
        </section>
      </div>
    </Context.Provider>
  )
}

export default App




