import Ingredient from "../../components/Ingredient/ingredient"
import Spinner from "../../components/Spinner/loadingSpinner"
import './cocktailDetail.css'

export default function CocktailDetail({ params }) {

    let data = JSON.parse(localStorage.getItem("drink"))

    //Adaptar componente singleCocktail para solo tener que cargar ese componente.
    return <>

        {
            data === undefined ? <Spinner /> :
                <div className="singleCard">
                    <h4>{data?.name}</h4>
                    <div className="imgContainer">
                        <img alt={data?.id}
                            src={data?.img}
                            className="cardImage" />
                    </div>
                    <div className="ingredientContainer">

                        <h3 className="ingredients">Ingredients</h3>
                        {
                            (data?.ingredients?.length > 0 ? data?.ingredients?.map((ingredient) =>
                                <p key={ingredient.slot}>{ingredient.name}-{ingredient.measure}</p>
                            )
                                : <div>No data</div>
                            )
                        }

                        <h3 className="instTitle">Instructions</h3>
                        <span className="instText">{data?.instructions_en}</span>

                    </div>
                </div>
        }
    </>

}



