package RRHH.servicio;


import RRHH.empleado.Empleado;
import RRHH.repositorio.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Importante no olcidades las notaciones
@Service
public class EmpleadoServicioImpl implements IEmpleadoServicio{

    @Autowired
    private EmpleadoRepositorio empleadoRepositorio;
    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }

    @Override
    public Empleado buscarEmpleadoPorId(Integer idEmpleado) {
        Empleado empleado = empleadoRepositorio.findById(idEmpleado).orElse(null);
        return empleado;
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Empleado empleado) {
    empleadoRepositorio.delete(empleado);
    }



}
