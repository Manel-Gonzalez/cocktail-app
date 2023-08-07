import React from "react";

export default function Ingredient({ ingredientName, ingredientMeasure }) {

    return (

        <p>{ingredientName}-{ingredientMeasure}</p>
    )
}