package RRHH.servicio;

import RRHH.empleado.Empleado;
import java.util.List;

public interface IEmpleadoServicio {

    //Métodos definidos
    public List<Empleado>listarEmpleados();

    public Empleado buscarEmpleadoPorId(Integer idEmpleado);

    public Empleado guardarEmpleado(Empleado empleado);

    public void eliminarEmpleado(Empleado empleado);
}
