import { useEffect, useContext } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import getCommonBevarages from "../../services/getCommonBevarages";
import CocktailContext from "../../context/CocktailContext"


export default function SearchCommonResults({ params }) {
    const { bevarages } = params
    const { cocktails, setCocktails } = useContext(CocktailContext)
    /*     const [cocktails, setCocktails] = useState([])
     */

    useEffect(function () {
        getCommonBevarages(bevarages)
            .then(cocktails => {
                setCocktails(cocktails)
            })
    }, [bevarages, setCocktails])

    return <>
        <ListOfCocktails cocktails={cocktails} bevarages={bevarages} />
    </>
}