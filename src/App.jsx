import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";    // Import Libreria di routing
import Layout from './layouts/Layout';                              // Import Pagina Layout
import HomePage from './pages/HomePage';                            // Import Pagina Home
import SerieTvPage from './pages/SerieTvPage';                      // Import Pagina Serie TV
import FilmPage from './pages/FilmPage';                            // Import Pagina Film
import OriginaliPage from './pages/OriginaliPage';                  // Import Pagina Originali
import AggiuntiDiRecentePage from './pages/AggiuntiDiRecentePage';  // Import Pagina Aggiunti di recente
import LaMiaListaPage from './pages/LaMiaListaPage';                // Import Pagina La mia lista


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
              <Route path="/SerieTvPage" element={<SerieTvPage/>} />
              <Route path="/FilmPage" element={<FilmPage/>} />
              <Route path="/OriginaliPage" element={<OriginaliPage/>} />
              <Route path="/AggiuntiDiRecentePage" element={<AggiuntiDiRecentePage/>} />
              <Route path="/LaMiaListaPage" element={<LaMiaListaPage/>} />
            </Route>

          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
