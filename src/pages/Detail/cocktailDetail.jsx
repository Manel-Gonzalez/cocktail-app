import { useContext, useState } from "react"
import StaticContext from "../../context/StaticContext"
import CocktailContext from "../../context/CocktailContext"
import SingleCocktail from "../../components/SingleCocktail/SingleCocktail"
import Cocktail from "../../components/Cocktail/Cocktail"
import useCocktails from "../../hooks/useCocktailById"


export default function CocktailDetail({ params }) {
    const [data, setData] = useState([])
    const { id } = params

    useCocktails(id, setData)
    console.log(data?.drinks, 'JAJAJAJ BORRACHO')



    //Adaptar componente singleCocktail para solo tener que cargar ese componente.
    return <>

        {
            data.drinks === undefined ? <h1>LOADING</h1> :
                <div>
                    <h4>{data?.drinks[0]?.strDrink}</h4>
                    <img alt={data?.drinks[0]?.idDrink} src={data?.drinks[0]?.strDrinkThumb} />


                    {data?.drinks[0]?.strIngredient1 === null ? <></> : <div>{data?.drinks[0]?.strIngredient1}   <span>{data?.drinks[0]?.strMeasure1}</span></div>}
                    {data?.drinks[0]?.strIngredient2 === null ? <></> : <div>{data?.drinks[0]?.strIngredient2}   <span>{data?.drinks[0]?.strMeasure2}</span></div>}
                    {data?.drinks[0]?.strIngredient3 === null ? <></> : <div>{data?.drinks[0]?.strIngredient3}   <span>{data?.drinks[0]?.strMeasure3}</span></div>}
                    {data?.drinks[0]?.strIngredient4 === null ? <></> : <div>{data?.drinks[0]?.strIngredient4}   <span>{data?.drinks[0]?.strMeasure4}</span></div>}
                    {data?.drinks[0]?.strIngredient5 === null ? <></> : <div>{data?.drinks[0]?.strIngredient5}   <span>{data?.drinks[0]?.strMeasure5}</span></div>}
                    {data?.drinks[0]?.strIngredient6 === null ? <></> : <div>{data?.drinks[0]?.strIngredient6}   <span>{data?.drinks[0]?.strMeasure6}</span></div>}
                    {data?.drinks[0]?.strIngredient7 === null ? <></> : <div>{data?.drinks[0]?.strIngredient7}   <span>{data?.drinks[0]?.strMeasure7}</span></div>}
                    {data?.drinks[0]?.strIngredient8 === null ? <></> : <div>{data?.drinks[0]?.strIngredient8}   <span>{data?.drinks[0]?.strMeasure8}</span></div>}
                    {data?.drinks[0]?.strIngredient9 === null ? <></> : <div>{data?.drinks[0]?.strIngredient9}   <span>{data?.drinks[0]?.strMeasure9}</span></div>}
                    {data?.drinks[0]?.strIngredient10 === null ? <></> : <div>{data?.drinks[0]?.strIngredient10}   <span>{data?.drinks[0]?.strMeasure10}</span></div>}
                    {data?.drinks[0]?.strIngredient11 === null ? <></> : <div>{data?.drinks[0]?.strIngredient11}   <span>{data?.drinks[0]?.strMeasure11}</span></div>}
                    {data?.drinks[0]?.strIngredient12 === null ? <></> : <div>{data?.drinks[0]?.strIngredient12}   <span>{data?.drinks[0]?.strMeasure12}</span></div>}
                    {data?.drinks[0]?.strIngredient13 === null ? <></> : <div>{data?.drinks[0]?.strIngredient13}   <span>{data?.drinks[0]?.strMeasure13}</span></div>}
                    {data?.drinks[0]?.strIngredient14 === null ? <></> : <div>{data?.drinks[0]?.strIngredient14}   <span>{data?.drinks[0]?.strMeasure14}</span></div>}
                    {data?.drinks[0]?.strIngredient15 === null ? <></> : <div>{data?.drinks[0]?.strIngredient15}   <span>{data?.drinks[0]?.strMeasure15}</span></div>}
                    <br />
                    <br />
                    <span>{data?.drinks[0].strInstructions}</span>
                </div>




        }

        {/*  <h4>{drinks.strDrink}</h4>
        <img alt={cocktail.idDrink} src={cocktail.strDrinkThumb} />
        <ul>
            <li>{cocktail.strIngredient1} </li>
            <li>{cocktail.strIngredient2} </li>
            <li>{cocktail.strIngredient3} </li>
            <li>{cocktail.strIngredient4} </li>
            <li>{cocktail.strIngredient5} </li>
        </ul> */}
    </>

}

/* 
            {
                cocktails.map(({ idDrink, strDrink, strDrinkThumb, strIngredient1 }) =>
                    <SingleCocktail
                        key={idDrink}
                        strDrink={strDrink}
                        idDrink={idDrink}
                        strDrinkThumb={strDrinkThumb}
                        strIngredient1={strIngredient1}

                    />
                )
            }


*/

/*    
return <>
        <h4>{cocktail.strDrink}</h4>
        <img alt={cocktail.idDrink} src={cocktail.strDrinkThumb} />
        <ul>
            <li>{cocktail.strIngredient1} </li>
            <li>{cocktail.strIngredient2} </li>
            <li>{cocktail.strIngredient3} </li>
            <li>{cocktail.strIngredient4} </li>
            <li>{cocktail.strIngredient5} </li>
        </ul>
    </>
*/

/* 
    return <Cocktail {...cocktail} />

*/