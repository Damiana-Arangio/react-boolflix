import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import Libreria di routing
import HomePage from './pages/HomePage';                          // Import Pagina home
import Layout from './layouts/Layout';                            // Import Pagina layout


function App() {

  return (
    <>
      {/*****************************
            GESTIONE DELLE ROTTE
      *******************************/}

        <BrowserRouter>
          <Routes> 

            {/* Rotta genitore - contenete il layout */}
            <Route element={<Layout />}>

              {/* Rotte figlie - mostrate dentro <Outlet/> */}
              <Route path="/" element={<HomePage/>} />

            </Route>

          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
