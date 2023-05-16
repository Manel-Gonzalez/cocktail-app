import { useEffect, useState } from 'react'
import { Link, Route, useLocation } from 'wouter'
import './App.css'
import SearchResultsByBrowser from './pages/SearchResults/searchResultsByBrowser'
import SearchResultsByLetter from './pages/SearchResults/searchResultsByLetter'
import SearchRandom from './pages/SearchResults/searchRandom'
import SearchCommonResults from './pages/SearchResults/searchCommon'
import Account from './pages/AccountOptions/Account/account'
import Context from './context/StaticContext'
import CocktailDetail from './pages/Detail/cocktailDetail'
import { CocktailContextProvider } from './context/CocktailContext'
import ListABC from "./components/ListABC/ListABC"
import CommonBevarages from "./components/CommonBevarages/Common"
import { supabase } from './supabaseClient'
import Authentication from './pages/Login/auth'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [session, setSession] = useState(null)
  const [path] = useLocation()


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)

    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  console.log(path, '111')
  return (
    <div className="app">
      {!session ? <Authentication /> : <div >
        <Context.Provider value={{ session }}>
          <Navbar />
          <div className="app-container">

            {path === "/account" ? <></> : <div className='searcher-container'> <ListABC /> <CommonBevarages /></div>}

            <CocktailContextProvider>
              <Route path='/' />

              <Route path='/account' component={Account} session={session} />

              <Route path='/search/:keyword' component={SearchResultsByBrowser} />

              <Route path='/letter/:letter' component={SearchResultsByLetter} />

              <Route path='/random' component={SearchRandom} />

              <Route path='/bevarage/:bevarages' component={SearchCommonResults} />

              <Route path='/cocktail/:id' component={CocktailDetail} />
            </CocktailContextProvider>
          </div>

        </Context.Provider>
      </div>}
    </div>
  )
}

export default App


