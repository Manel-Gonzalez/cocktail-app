import { useEffect, useState } from "react";
import "./cocktail.css"
import { Link } from 'wouter'

export default function CocktailCard({ strIngredient1, strIngredient2, strIngredient3, drink }) {
    console.log(drink.id);
    console.log(drink);
    return (
        <div className='CocktailCard' onClick={(e) => localStorage.setItem('drink', JSON.stringify(drink))} >
            <Link to={`/cocktail/${drink.id}`} className='cocktail-link' >
                <h4>{drink.name}</h4>
                <img alt={drink.id} src={drink.img} />
                <div><p>{strIngredient1}</p> <p>{strIngredient2}</p> <p>{strIngredient3}</p></div>
            </Link >
        </div >
    )
}
/* 
onClick={localStorage.setItem('test', JSON.stringify(data))}
*/


/*             <ul>
                <li>{ing1} </li>
                <li>{ing2} </li>
                <li>{ing3} </li>
                <li>{ing4} </li>
                <li>{ing5} </li>
            </ul>
             {strIngredient1 === null ? <></> : <div>{data?.drinks[0]?.strIngredient1}</div>}
            
            
            */


/*
 
onClick={() => {
if (drink.id === idDrink) {
   localStorage.setItem('test', JSON.stringify(drink))

}
console.log('asdfasdfasdf', drink)
}}*/