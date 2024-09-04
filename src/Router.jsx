import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Erreur from './pages/Erreur'
import Header from './components/Header'
import Footer from './components/Footer'
import Logement from './pages/Logement'

function Router() {
  

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/logement/:id" element={<Logement />}  />
        <Route path="*" element={<Erreur />}  />
    </Routes> 
    <Footer/>
    </>   
  )
}

export default Router
