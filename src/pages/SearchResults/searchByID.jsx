import { useContext, useEffect, useState } from "react";
import CocktailContext from "../../context/CocktailContext"
import SingleCocktail from "../../components/SingleCocktail/SingleCocktail";
import CocktailDetail from "../Detail/cocktailDetail";
import getCocktailsById from "../../services/getById";

export default function SearchResultsByID({ params }) {
    /*     const { id } = params
        const { cocktail, setCocktail } = useContext(CocktailContext)
    
        console.log('params in results ====>>', params);
        useEffect(function () {
            getCocktailsById(id)
                .then(cocktail => {
                    setCocktail(cocktail)
                })
        }, [id, setCocktail])
    
        return <>
            <CocktailDetail cocktail={cocktail} />
        </> */
}