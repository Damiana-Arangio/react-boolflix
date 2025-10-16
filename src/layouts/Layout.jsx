import { Outlet } from "react-router-dom";  //Import del componente Outlet: segnaposto dove verranno renderizzate le pagine figlie
import Navbar from "../components/Navbar";  // Import del componente Navbar che sarà visibile in tutte le pagine

function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout