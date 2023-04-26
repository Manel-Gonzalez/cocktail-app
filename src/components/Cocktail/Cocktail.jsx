import getCocktails from '../../services/searchByBrowser'
import { useState, useEffect } from 'react'
import "./cocktail.css"

export default function CocktailCard({ title, id, url, ing1, ing2, ing3, ing4, ing5 }) {

    return (
        <div className='Cocktail'>
            <h4>{title}</h4>
            <img alt={id} src={url} />

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