import { API_URL, API_BEVARAGE } from "./settings";


export default async function getCommonBevarages(bevarages = "vodka") {
    const apiURL = `${API_URL}/${API_BEVARAGE}${bevarages}`
    const res = await fetch(apiURL)
    const drinks = await res.json()

    return drinks
}