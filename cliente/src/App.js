import './App.css';

import {useState} from "react";

import Axios from "axios";

import 'boostrap/dist/css/boostrap.min.css';
import Swal from "sweetaler2";

//<div></div>
function App() {
  const [id_usuario,setId_usuario] = useState(0);
  const [usuario, setUsuario] = useState("");
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [correo,setCorreo] = useState("");
  const [password,setPassword] = useState("");
  const [id_tipo, setId_tipo] = useState("");

    const add =()=>{
      Axios.post("http://localhost:3001/create",{
        id_usuario: id_usuario,
        usuario: usuario,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: password,
        id_tipo: id_tipo
      }).then(()=>{
        listar();
        clear();
        Swal.fire({
          title: "<strong>Registro Existoso!</strong>",
          html:"<i> Ek usuario <strong>"+nombre+"</strong> fue registrado con exito!!</i>",
          icon: 'success',
          timer:3000
        })
      }).catch(function(error){
        FileSystemWritableFileStream.fire({
          icon: 'error',
          title: 'Oops...',
          text: JSON.parse(JSON.stringify(error)).message==="Network Error"?"intente mas tarde":JSON.parse(JSON.stringify(error)).message
        })
      });
    }

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
            <label>Tipo de usuario</label>
            <input type='text' onChange={event => {setId_tipo(event.target.value="3");
            }}
            className='form-control' value={id_tipo}/>
          </div>
        </div>

        <div className='card-footer text-muted'>
          {
            editar?
            <div>
              <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
              <button className='btn btn-info m-2' onClick={clear}>Cancelar</button>
            </div>
            :<button className='btn btn-succes' onClick={add}>Registrar</button>
          }
              <button className='btn btn-secondary' onClick={listar}>Listar</button>
        </div>
      </div>
      </div>    
    </div>
  );
}

export default App;
