package RRHH.repositorio;

import RRHH.empleado.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

//En Empleado hay que indicar el tipo de la primary key
public interface EmpleadoRepositorio extends JpaRepository <Empleado, Integer> {
}
