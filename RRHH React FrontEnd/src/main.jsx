import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//líneas para cargar Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
