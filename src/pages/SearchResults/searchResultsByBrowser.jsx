import { useContext, useEffect } from "react";
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails";
import getCocktailsByBrowser from "../../services/getByBrowser"
import CocktailContext from "../../context/CocktailContext"

export default function SearchResultsByBrowser({ params }) {
    const { keyword } = params
    const { cocktails, setCocktails } = useContext(CocktailContext)

    //const [cocktails, setCocktails] = useState([])
    useEffect(function () {
        getCocktailsByBrowser(keyword)
            .then(cocktails => {
                setCocktails(cocktails)
            })
    }, [keyword, setCocktails])
    return <>
        <ListOfCocktails cocktails={cocktails} />
    </>
}