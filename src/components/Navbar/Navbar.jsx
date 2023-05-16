import { Link, Route } from 'wouter'
import { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"
import Browser from '../Browser/Browser'

export default function Navbar() {
    const [session, setSession] = useState(false)
    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);

        const toggler = () => { setToggleValue(!toggleValue) }
        return [toggleValue, toggler]
    }
    const [toggle, setToggle] = useToggle();
    const [toggleMenu, setToggleMenu] = useToggle();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)

        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])



    return <header>

        <nav className="flex nav">
            <div className='flex left-container' >
                <Link to='/'>
                    <h2 className='site-title'>LOS CÓCTELE</h2>
                </Link>

                <div className='flex browser'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color='#f1f1f1' onClick={setToggle} />
                    {toggle && (<Browser />)}
                </div>
            </div>


            <div>
                <span className='myAccount' onClick={setToggleMenu}>My Account</span>
                {toggleMenu &&
                    <div className='dropdownMenu'>
                        <Link to='/account'>
                            <span className='accountSettings'> <FontAwesomeIcon icon={faGear} /> Editar Perfil</span>
                        </Link>

                        <button className='logOut' type='button' onClick={() => supabase.auth.signOut()}> <FontAwesomeIcon icon={faSignOut} />  Log Out </button>

                    </div>}
            </div>


        </nav>
    </header>
}


/* 
            <div className='menu-container'>
                <div className='menu-trigger'>
                    <span>Mi Cuenta</span>
                </div>

                <div className='dropdown-menu'>
                    <ul>
                        <DropdownItem text={"My profile"} />
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

function DropdownItem(props) {
    return <li className='dropdownItem'>
        <span>{props.img}</span>
        <a>{props.text}</a>
    </li> */