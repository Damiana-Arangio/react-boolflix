/* Componente Navbar che gestisce la navigazione tra le pagine */

import { NavLink } from "react-router-dom"                /* Import componente LinkNav per navigare le pagine */

/* Array di oggetti per generare dinamicamente i link della Navbar */
const links = [
    {  path: '/', label: 'Home' }
]


function Navbar() {

    /***************
        RENDERING
    ****************/ 
    return(
        <>
            {/* Barra di Navigazione Principale */}
            <nav>
                <ul>
                    { links.map( (link) => (
                        <li key={link.path}>
                            <NavLink to={link.path}> {link.label} </NavLink>
                        </li>
                     ))}
                </ul >    
            </nav>
        </>
    )
}

export default Navbar