import { useEffect, useState } from 'react'
import Cocktail from "../Cocktail/Cocktail"
import SingleCocktail from '../SingleCocktail/SingleCocktail'
import getCocktails from '../../services/getByBrowser'
import ListABC from '../ListABC/ListABC'
import Browser from '../Browser/Browser'
import "./ListOfCocktails.css"
import CommonBevarages from '../CommonBevarages/Common'



export default function ListOfCocktails({ cocktails, bevarages }) {
   const drinks = cocktails
   const test = bevarages

   return <>
      <div className='ListOfCocktails'>
         {
            cocktails?.drinks?.map(({ idDrink, strDrink, strDrinkThumb, strIngredient1 } = drinks) =>
               <Cocktail
                  key={idDrink}
                  strDrink={strDrink}
                  idDrink={idDrink}
                  strDrinkThumb={strDrinkThumb}
                  strIngredient1={strIngredient1}
                  test={test}
               />
            )
         }
      </div>
   </>

}

/* 
                  ing1={strIngredient1}
                  ing2={strIngredient2}
                  ing3={strIngredient3}
                  ing4={strIngredient4}
                  ing5={strIngredient5}

*/