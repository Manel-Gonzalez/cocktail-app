

export default function SingleCocktail(idDrink) {
    // crida api detalle 1 coctel

/*     useCocktails(idDrink)
 */    return (
        <div className='Cocktail'>
            <h4>{strDrink}</h4>
            <img alt={idDrink} src={strDrinkThumb} />
            <ul>
                <li>{strIngredient1} </li>
                <li>{strIngredient2} </li>
                <li>{strIngredient3} </li>
                <li>{strIngredient4} </li>
                <li>{strIngredient5} </li>
            </ul>
        </div>
    )
}