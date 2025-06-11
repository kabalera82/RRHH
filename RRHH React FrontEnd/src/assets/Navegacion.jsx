import { Link } from 'react-router-dom';

export default function Navegacion() {
  return (
    <div className="container">
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="nav-link active" aria-current="page" to="/">RRHH Data Base</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agregar">Agregar Empleado</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
