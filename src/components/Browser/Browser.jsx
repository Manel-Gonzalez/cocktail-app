import { useState } from "react"
import { useLocation } from "wouter"
import './browser.css'

export default function Browser() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

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