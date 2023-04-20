import { useEffect, useState } from 'react'
import Cocktail from "../Cocktail/Cocktail"
import getCocktails from '../../services/searchByBrowser'
import ListABC from '../ListABC/ListABC'
import Browser from '../Browser/Browser'
import "./ListOfCocktails.css"



export default function ListOfCocktails({ cocktails }) {


   return <>
      <Browser></Browser>
      <ListABC></ListABC>
      <div className='ListOfCocktails'>
         {
            cocktails.map(({ idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 }) =>
               <Cocktail
                  key={idDrink}
                  title={strDrink}
                  id={idDrink}
                  url={strDrinkThumb}
                  ing1={strIngredient1}
                  ing2={strIngredient2}
                  ing3={strIngredient3}
                  ing4={strIngredient4}
                  ing5={strIngredient5}
               />
            )
         }
      </div>
   </>

}
