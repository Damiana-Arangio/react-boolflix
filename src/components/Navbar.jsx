/* Componente Navbar che gestisce la navigazione tra le pagine */

import { NavLink } from "react-router-dom"                /* Import componente LinkNav per navigare le pagine */
import { useState, useEffect } from "react";

/* Array di oggetti per generare dinamicamente i link della Navbar */
const links = [
    {  path: '/', label: 'Home' },
    { path: '/SerieTvPage', label: 'Serie TV' },
    { path: '/FilmPage', label: 'Film' },
    { path: '/OriginaliPage', label: 'Originali' },
    { path: '/AggiuntiDiRecentePage', label: 'Aggiunti di recente' },
    { path: '/LaMiaListaPage', label: 'La mia lista' }
]


function Navbar() {

    /***********
        HOOK
    ***********/

    /* Hook di Stato */
    const [InputSearchbar, setInputSearchbar] = useState("")   // Variabile di stato che gestisce il testo digitato nella barra di ricerca
    

    /***************
        RENDERING
    ****************/ 
    return(
        <>
            {/* Barra di Navigazione Principale */}
            <nav>

                {/* Link per Navigare tra le Pagine */}
                <ul>
                    { links.map( (link) => (
                        <li key={link.path}>
                            <NavLink to={link.path}> {link.label} </NavLink>
                        </li>
                     ))}
                </ul >

            {/* Form per Ricerca Film */}
            <form onSubmit={handleSubmit}>
                {/* Barra di Ricerca */}
                <input 
                    type="text" 
                    name="inputSearchbar"
                    value={InputSearchbar}
                    onChange={(e) => setInputSearchbar(e.target.value)} // Aggiorna lo stato con il testo digitato
                    placeholder="Ricerca film..."
                />

                {/* Bottone */}
                <button type="submit"> Cerca </button>
            </form>

            </nav>
        </>
    )

    /**************
        FUNZIONI
    **************/

    /* Funzione che gestisce l'evento onSubmit del form */
    function handleSubmit(event) {
        event.preventDefault();                     // Blocco refresh Pagina
        console.log("Chiamata API ricerca film");
    }
}

export default Navbar