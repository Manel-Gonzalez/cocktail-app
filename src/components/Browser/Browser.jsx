import { useEffect, useState } from "react"
import { useLocation } from "wouter"
import './browser.css'
import { supabase } from "../../supabaseClient"

export default function Browser() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const [cocktails, setCocktails] = useState(null)



    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }




    return <>
        <span>
            <form onSubmit={handleSubmit}>
                <input placeholder="Busca tus cóctele" type="text" onChange={handleChange} value={keyword} />
            </form>
        </span>


    </>
}

/* const { data, error } = await supabase
    .from('dim_cocktails_ingredients')
    .select()
    .or(`ingredient_name.eq.%${coso}%,drink_name.eq.%${coso}%`)
 */


/* 
    
    return <>
        <span>
            <form onSubmit={handleSubmit}>
                <input placeholder="Busca tus cóctele" type="text" onChange={handleChange} value={keyword} />
            </form>
        </span>


    </>
    
    
*/