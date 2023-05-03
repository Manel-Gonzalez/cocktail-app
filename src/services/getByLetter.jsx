import { API_URL, API_FIRST_LETTER } from "./settings";


export default async function getByLetter(letter = "a") {
  const apiURL = `${API_URL}/${API_FIRST_LETTER}${letter}`
  const res = await fetch(apiURL)
  const drinks = await res.json()

  return drinks
}