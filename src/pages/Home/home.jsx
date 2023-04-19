import { Link, Route, useLocation } from "wouter"
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails"
import { useState } from "react"
import ListABC from "../../components/ListABC/ListABC"

export default function Home(){
    const [keyword, setKeyword] = useState ('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
     evt.preventDefault()
     pushLocation(`/search/${keyword}`)
    }
    
    const handleChange = evt => {
     setKeyword(evt.target.value)
    }
   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Busca tus cóctele" type="text" onChange={handleChange} value={keyword} />
            </form>
            <ListABC></ListABC>
        </>
    )
}