import axios from 'axios';
//Importamos el hook useState para manejar el estado de los empleados
//Importamos React y useEffect para manejar el ciclo de vida del componente
import { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';


export default function Listado() {
  const urlBase = "/api/empleados";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);//con el arreglo vacío se ejecuta una sola vez al montar el componente

  const cargarEmpleados = async () => {
    try {
      const response = await axios.get(urlBase);
      console.log("Resultado cargar empleados");  // Corregido de 'consolelog'
      console.log(response.data);
      setEmpleados(response.data);
    } catch (error) {
      console.error("Error al cargar empleados: ", error);
    }
  }

  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    // Actualizamos la lista de empleados después de eliminar uno
    cargarEmpleados();

  }

  return (
    <div className="container">
      <h1 className="text-center"></h1>
      <p>
        <br />
        <br />
      </p>
      <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {/*Abrimos llaves para insertar contenido de JavaScript*/}
          {
            /*Iteramos sobre el array de empleados y generamos una fila por cada empleado*/
            empleados.map((empleado, indice) => (
              <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td><NumericFormat value={empleado.sueldo}
                  displayType='text'
                  thousandSeparator=',' suffix=' € '
                  decimalScale={2} fixedDecimalScale={true} />
                </td>

                <td className='text-center'>
                  <div>
                    <Link to={`/editar/${empleado.idEmpleado} `}
                      className='btn btn-warning btn-sm me-3'>Editar</Link>
                    <button className='btn btn-danger btn-sm me-3' onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                    >Eliminar</button>

                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
