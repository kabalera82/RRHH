package RRHH.controlador;


import RRHH.empleado.Empleado;
import RRHH.excepcion.NoEncontradoExcepcion;
import RRHH.servicio.IEmpleadoServicio;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//http://localhost:8080/rrhh-app/
@RequestMapping("rrhh-app")
//Este será el puerto de React
@CrossOrigin(origins = "http://localhost:5173")
public class EmpleadoControlador {
    //Logger debe ser dek paquete org.slf4j para importar esa clase
    private static final Logger logger =
            //Creamos la variable para mandar informacion a consola para modificar el patron logback
            LoggerFactory.getLogger(EmpleadoControlador.class);

    @Autowired
    private IEmpleadoServicio empleadoServicio;

    //Vamos a recibir una peticion por eso realizamos una get
    //http://localhost:8080/rrhh-app/empleados
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados() {
        var empleados = empleadoServicio.listarEmpleados();
        System.out.println("Cantidad empleados: " + empleados.size());
        empleados.forEach(System.out::println);
        return empleados;
    }

    //Ahora vamos a realizar una Inserción por lo que realizaremos un método Post
    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a agregar: " + empleado);
        return empleadoServicio.guardarEmpleado(empleado);
    }

    //Ahora vamos a realizar una peticion de tipo get
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null) {
            throw new NoEncontradoExcepcion("No se encontró el id: " + id);
        }return ResponseEntity.ok(empleado);
    }

    //Vamos a Realizar una Inserción de un objeto de tipo empleado
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoDetalles) {
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null) {
            throw new NoEncontradoExcepcion("No se encontró el id: " + id);
        }
        empleado.setNombre(empleadoDetalles.getNombre());
        empleado.setDepartamento(empleadoDetalles.getDepartamento());
        empleado.setSueldo(empleadoDetalles.getSueldo());
        empleadoServicio.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleadoDetalles);
    }

    //VAmos a REallizar un peticion de tipo DELETE
    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>>
    eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null) {
            throw new NoEncontradoExcepcion("No existe el id: " + id);
        }empleadoServicio.eliminarEmpleado(empleado);
        //Json {"eliminado": "true"}
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }




}
