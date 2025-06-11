import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navegacion from './assets/Navegacion.jsx'
import Listado from './empleados/Listado.jsx'
import Agregar from './empleados/Agregar.jsx'
import EditarEmpleado from './empleados/EditarEmpleado.jsx'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Listado/>} />
          <Route path="/agregar" element={<Agregar/>} />
          <Route path="/editar/:id" element={<EditarEmpleado/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;