import { Link, Route, useLocation } from "wouter"
import ListOfCocktails from "../../components/ListOfCocktails/ListOfCocktails"
import { useState } from "react"
import ListABC from "../../components/ListABC/ListABC"
import Browser from "../../components/Browser/Browser"

export default function Home() {


    return (
        <>
            <Browser></Browser>
            <ListABC></ListABC>
        </>
    )
}