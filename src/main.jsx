import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </StrictMode>,
)

