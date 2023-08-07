import { useEffect, useState } from 'react'
import { Route, useLocation } from 'wouter'
import './App.css'
import SearchResultsByBrowser from './pages/SearchResults/searchResultsByBrowser'
/* import SearchRandom from './pages/SearchResults/searchRandom'
 */import Account from './pages/AccountOptions/Account/account'
import Context from './context/StaticContext'
import CocktailDetail from './pages/Detail/cocktailDetail'
import { CocktailContextProvider } from './context/CocktailContext'
import { supabase } from './supabaseClient'
import Authentication from './pages/Login/auth'
import Navbar from './components/Navbar/Navbar'
import SearchRandom from './pages/SearchResults/searchRandom'
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
  return (
    <div className="app">
      {!session ? <Authentication /> : <div >
        <Context.Provider value={{ session }}>
          <Navbar />
          <div className="app-container">

            {path === "/account" ? <></> : <div className='browser-container'> </div>}

            <CocktailContextProvider>
              <Route path='/' component={SearchRandom} />

              <Route path='/account' component={Account} session={session} />

              <Route path='/search/:keyword' component={SearchResultsByBrowser} />

              {/*               <Route path='/random' component={SearchRandom} />
 */}
              <Route path='/cocktail/:id' component={CocktailDetail} />
            </CocktailContextProvider>
          </div>

        </Context.Provider>
      </div>}
    </div>
  )
}

export default App


