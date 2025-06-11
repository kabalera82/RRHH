import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Agregar() {

    let Navegacion = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre: '',
        departamento: '',
        sueldo: ''
    })

    const { nombre, departamento, sueldo } = empleado

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const urlBase = "/api/empleados";
        await axios.post(urlBase, empleado);
        Navegacion('/');
    }

    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: '30px' }}>
                <h3>Agregar Empleado</h3>
            </div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name='nombre'
                        required
                        value={nombre}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="departamento"
                        name='departamento'
                        required
                        value={departamento}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sueldo" className="form-label">Salario</label>
                    <input
                        type="number"
                        step="any"
                        className="form-control"
                        id="sueldo"
                        name='sueldo'
                        required
                        value={sueldo}
                        onChange={onInputChange}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                    <Link to='/' className="btn btn-danger btn-sm">Volver</Link>
                </div>
            </form>
        </div>
    )
}