import './App.css';

import {useState} from "react";

import Axios from "axios";

import 'boostrap/dist/css/boostrap.min.css';
import Swal from "sweetaler2";

//<div></div>
function App() {
  return (
    <div className="container">
      <div className='card tex-center'>
      <div className='card-header'>
        Gestion de usuarios
      </div>
      <div className='card-body'>
        <div className='formulario'>
          <h3>Datos </h3>
          <div className='info'>
            <label>Nombre de usuario</label>
            <input type='text' onChange={event => {setUsuario(event.target.value);
            }}
            className='form-control' value={usuario}/>
          </div>
          <div className='info'>
            <label>Nombre</label>
            <input type='text' onChange={event => {setNombre(event.target.value);
            }}
            className='form-control' value={nombre}/>
          </div>
          <div className='info'>
            <label>Apellido</label>
            <input type='text' onChange={event => {setApellido(event.target.value);
            }}
            className='form-control' value={apellido}/>
          </div>
          <div className='info'>
            <label>Email</label>
            <input type='email' onChange={event => {setCorreo(event.target.value);
            }}
            className='form-control' value={correo}/>
          </div>
          <div className='info'>
            <label>No.documento</label>
            <input type='number' onChange={event => {setId_usuario(event.target.value);
            }}
            className='form-control' value={id_usuario}/>
          </div>
          <div className='info'>
            <label>Password</label>
            <input type='password' onChange={event => {setPassword(event.target.value);
            }}
            className='form-control' value={password}/>
          </div>
          <div className='info'>
            <label>Nombre de usuario</label>
            <input type='text' onChange={event => {setUsuario(event.target.value);
            }}
            className='form-control' value={usuario}/>
          </div>
        </div>
      </div>  
      </div>    
    </div>
  );
}

export default App;
