import { useContext } from "react"

export default function CocktailDetail({ params }) {
    console.log(params.id)
    return <h1>cocktail with id {params.id}</h1>
}