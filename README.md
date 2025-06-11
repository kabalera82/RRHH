

# 💼 Sistema de Recursos Humanos - RRHH App

Aplicación completa de gestión de empleados desarrollada con **Spring Boot (Java 24)** en el backend y **React + Vite** en el frontend. Se conecta a una base de datos **MySQL** para realizar operaciones CRUD.

---

## 🧰 Tecnologías Usadas

### Backend
- Java 24
- Spring Boot 3.5.0+
- Spring Web
- Spring Data JPA
- Lombok
- MySQL

### Frontend
- React (con Vite)
- Axios
- HTML5 / CSS3
- Bootstrap (opcional)

---

## 📁 Estructura del Proyecto

```

RRHH-App/
├── backend/
│   ├── gnrh.modelo/
│   ├── gnrh.repositorio/
│   ├── gnrh.servicio/
│   └── gnrh.controlador/
└── frontend/
├── src/
├── componentes/
│   ├── EmpleadoLista.js
│   └── EmpleadoFormulario.js
└── servicios/
└── EmpleadoServicio.js

````

---

## 🚀 Cómo Ejecutar el Proyecto

### 🔹 1. Backend - Spring Boot

#### Configuración Inicial
- Crear el proyecto en [https://start.spring.io](https://start.spring.io) con las siguientes dependencias:
  - Spring Web
  - Spring Data JPA
  - Lombok
  - MySQL Driver

#### Configura `application.properties`
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/recursos_humanos_db?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=admin
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
````

#### Ejecutar

* Abre el proyecto en IntelliJ IDEA o tu IDE favorito
* Ejecuta `RhApplication.java`
* Verifica en Postman: `GET http://localhost:8080/rh-app/empleados`

---

### 🔹 2. Frontend - React + Vite

#### Crear Proyecto

```bash
mkdir Recursos-Humanos-App
cd Recursos-Humanos-App
npm create vite@latest . -- --template react
npm install
npm run dev
```

#### Configurar CORS en el Backend

```java
@CrossOrigin(origins = "http://localhost:5173")
```

#### Ejecutar

* Abre navegador: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Funcionalidades

* Listar empleados
* Crear nuevos empleados
* Editar empleados
* Eliminar empleados
* Conexión frontend-backend vía API REST
* Formulario dinámico en React

---

## 🧪 Pruebas con Datos Iniciales (opcional)

```sql
INSERT INTO empleado (nombre, departamento, sueldo) VALUES
('Juan Pérez', 'Sistemas', 20000),
('Carla Jiménez', 'Finanzas', 23000);
```

---

## 📝 Créditos

Desarrollado por: Marcos Padilla
Guías técnicas basadas tutoriales Global Mentoring.
Curso Java.

---



