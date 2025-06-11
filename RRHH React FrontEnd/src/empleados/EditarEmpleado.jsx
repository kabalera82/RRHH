import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditarEmpleado() {

    const urlBase = "/api/empleados";

    const Navegacion = useNavigate();

    const { id } = useParams();

    const [empleado, setEmpleado] = useState({
        nombre: '',
        departamento: '',
        sueldo: ''
    });

    const { nombre, departamento, sueldo } = empleado;

    // Cargar datos del empleado al montar el componente
    // y actualizar el estado del empleado
    useEffect(() => {
        cargarEmpleado();
    }, []);

    // Cargar datos del empleado a editar
    const cargarEmpleado = async () => {
        try {
            const resultado = await axios.get(`/api/empleados/${id}`);
            setEmpleado(resultado.data);
        } catch (error) {
            console.error("Error al cargar empleado:", error);
        }
    };


    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${urlBase}/${id}`, empleado);
            Navegacion('/');
        } catch (error) {
            console.error("Error al actualizar empleado:", error);
        }
    };

    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: '30px' }}>
                <h3>Editar Empleado</h3>
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
                    <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
                    <Link to='/' className="btn btn-danger btn-sm">Volver</Link>
                </div>
            </form>
        </div>
    )
}