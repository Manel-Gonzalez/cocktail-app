import { useEffect, useState } from 'react'
import { Link, Route, useLocation } from 'wouter'
import './App.css'
import SearchResultsByBrowser from './pages/SearchResults/searchResultsByBrowser'
import SearchResultsByLetter from './pages/SearchResults/searchResultsByLetter'
import SearchRandom from './pages/SearchResults/searchRandom'
import SearchCommonResults from './pages/SearchResults/searchCommon'
import Account from './pages/Login/account'
import Context from './context/StaticContext'
import CocktailDetail from './pages/Detail/cocktailDetail'
import { CocktailContextProvider } from './context/CocktailContext'
import ListABC from "./components/ListABC/ListABC"
import Browser from "./components/Browser/Browser"
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

            {path === "/account" ? <></> : <div> <ListABC /> <CommonBevarages /></div>}





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

/* 
              <Route path='/account' render={(session) => <Account session={session} />} />
*/


/* 

      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}


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

*/

/* 

  {!session ? <Auth /> : <div >
        <Context.Provider value={{ session }} key={session.user.id} session={session} >
          <Navbar />
          <div className="app-container">
            <ListABC />
            <CommonBevarages />
            <CocktailContextProvider>
              <Route path='/' />

              <Route path='/account' component={(session) => <Account session={session} />} />

              <Route path='/search/:keyword' component={SearchResultsByBrowser} />

              <Route path='/letter/:letter' component={SearchResultsByLetter} />

              <Route path='/random' component={SearchRandom} />

              <Route path='/bevarage/:bevarages' component={SearchCommonResults} />

              <Route path='/cocktail/:id' component={CocktailDetail} />
            </CocktailContextProvider>
          </div>

        </Context.Provider>




      </div>}

*/

