import React, { useState, useEffect } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";

function App() {
  const [id_habitacion, setId_habitacion] = useState(0);
  const [habitacion, setHabitacion] = useState("");
  const [precio, setPrecio] = useState("");
  const [editar, setEditar] = useState(false);
  const [habitacionesList, setHabitacionesList] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      id_habitacion: id_habitacion,
      habitacion: habitacion,
      precio: precio
    }).then(() => {
      listar();
      clear();
      Swal.fire({
        title: "<strong>Registro Exitoso!!</strong>",
        html: "<i>La habitación <i>" + id_habitacion + "</i> fue registrado con éxito!!!</i>",
        icon: 'success',
        timer: 3000
      })
    }).catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: error.message === "Network Error" ? "Intente más tarde" : error.message
      })
    });
  }

  const update = () => {
    Axios.post("http://localhost:3001/update", {
      id_habitacion: id_habitacion,
      habitacion: habitacion,
      precio: precio
    }).then(() => {
      listar();
      clear();
      Swal.fire({
        title: "<strong>Actualización Exitosa!!</strong>",
        html: "<i>La habitación <i>" + id_habitacion + "</i> fue Actualizado con éxito!!!</i>",
        icon: 'success',
        timer: 3000
      })
    }).catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: error.message === "Network Error" ? "Intente más tarde" : error.message
      })
    });
  }

  const clear = () => {
    setId_habitacion(0);
    setHabitacion("");
    setPrecio("");
    setEditar(false);
  }

  const editarHabitacion = (val) => {
    setEditar(true);
    setId_habitacion(val.id_habitacion);
    setHabitacion(val.habitacion);
    setPrecio(val.precio);
  }

  const listar = () => {
    Axios.get("http://localhost:3001/usuarios").then((response) => {
      setHabitacionesList(response.data);
    });
  }

  return (
    <div className='container'>
      <div className='card text-center'>
        <div className='card-header'>
          <h1>Gestión de Habitaciones</h1>
        </div>
        <div className='card-body'>
          <div className='formulario'>
            <h3>Datos de Habitación:</h3>
            <div className='info'>
              <label>ID de Habitación:</label>
              <input
                type="number"
                className="form-control"
                value={id_habitacion}
                onChange={(event) => setId_habitacion(event.target.value)}
              />
            </div>
            <div className='info'>
              <label>Nombre de Habitación:</label>
              <input
                type="text"
                className="form-control"
                value={habitacion}
                onChange={(event) => setHabitacion(event.target.value)}
              />
            </div>
            <div className='info'>
              <label>Precio:</label>
              <input
                type="number"
                className="form-control"
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
              />
            </div>
            <br />
            {editar ? (
              <button className='btn btn-success' onClick={update}>Actualizar Habitación</button>
            ) : (
              <button className='btn btn-primary' onClick={add}>Crear Habitación</button>
            )}
            <button className='btn btn-secondary' onClick={clear}>Limpiar</button>
          </div>
        </div>
      </div>
      <h2>Lista de Habitaciones</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Habitación</th>
            <th>Nombre de Habitación</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {habitacionesList.map((habitacion) => (
            <tr key={habitacion.id_habitacion}>
              <td>{habitacion.id_habitacion}</td>
              <td>{habitacion.habitacion}</td>
              <td>{habitacion.precio}</td>
              <td>
                <button className='btn btn-warning' onClick={() => editarHabitacion(habitacion)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
