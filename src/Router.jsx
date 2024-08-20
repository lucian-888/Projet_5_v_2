import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Erreur from './pages/Erreur'
import Header from './components/Header'
import Footer from './components/Footer'

function Router() {
  

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="*" element={<Erreur />}  />
    </Routes> 
    <Footer/>
    </>   
  )
}

export default Router
