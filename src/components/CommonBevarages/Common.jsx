import { Link } from 'wouter'
import './common.css'

export default function CommonBevarages() {
    return <>
        <ul className='commonBevarages'>
            <Link to='/bevarage/vodka'>Vodka</Link>
            -
            <Link to='/bevarage/gin'>Gin</Link>
            -
            <Link to='/bevarage/rum'>Rum</Link>
            -
            <Link to='/bevarage/tequila'>Tequila</Link>
            -
            <Link to='/bevarage/whiskey'>Whiskey</Link>
        </ul>
    </>
}