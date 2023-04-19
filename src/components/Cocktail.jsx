import getCocktails from '../services/getCocktails'
import { useState, useEffect } from 'react'

export default function CocktailCard({title ,id ,url,ing1,ing2,ing3,ing4,ing5}){

    return (
        <div>
            <h4>{title}</h4>
            <img alt={id} src={url}/>
            <ul>
                <li>{ing1} </li>
                <li>{ing2} </li>
                <li>{ing3} </li>
                <li>{ing4} </li>
                <li>{ing5} </li>
            </ul>
        </div>
    )
}