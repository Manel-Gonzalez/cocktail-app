import { useEffect, useContext } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import getCocktailsByLetter from "../../services/getByLetter"
import CocktailContext from "../../context/CocktailContext"


export default function SearchResultsByLetter({ params }) {
    const { letter } = params
    const { cocktails, setCocktails } = useContext(CocktailContext)
    /*     const [cocktails, setCocktails] = useState([])
     */


    useEffect(function () {
        getCocktailsByLetter(letter)
            .then(cocktails => {
                setCocktails(cocktails)
            })
    }, [letter, setCocktails])

    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}