import { useEffect, useState } from 'react'
import Cocktail from "../Cocktail/Cocktail"
import SingleCocktail from '../SingleCocktail/SingleCocktail'
/* import getCocktails from '../../services/getByBrowser'
/* 
 /*import ListABC from '../ListABC/ListABC'*/
import Browser from '../Browser/Browser'
import "./ListOfCocktails.css"
import Spinner from '../Spinner/loadingSpinner'



export default function ListOfCocktails({ cocktails }) {
   return <>
      <div className='ListOfCocktails'>
         {
            (cocktails.length > 0 ? cocktails?.map((drink) =>
               <Cocktail
                  key={drink.id}
                  strDrink={drink.name}
                  idDrink={drink.id}
                  strDrinkThumb={drink.img}
                  drink={drink}
                  strIngredient1={drink.ingredients[0]?.name}
                  strIngredient2={drink.ingredients[1]?.name}
                  strIngredient3={drink.ingredients[2]?.name}
               />


            )
               : <Spinner
                  style={{ heigth: 100 }}
               />
            )


         }
      </div>
   </>

}
