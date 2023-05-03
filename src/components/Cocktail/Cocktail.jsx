import "./cocktail.css"
import { Link } from 'wouter'

export default function CocktailCard({ strDrink, idDrink, strDrinkThumb, strIngredient1 }) {
    return (
        <div className='CocktailCard'>
            <Link to={`/cocktail/${idDrink}`} className='cocktail-link'>
                <h4>{strDrink}</h4>
                <img alt={idDrink} src={strDrinkThumb} />
                <div>{strIngredient1} </div>
            </Link>

        </div>
    )
}

/*             <ul>
                <li>{ing1} </li>
                <li>{ing2} </li>
                <li>{ing3} </li>
                <li>{ing4} </li>
                <li>{ing5} </li>
            </ul> */