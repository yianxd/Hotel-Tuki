import './App.css';
import { useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

function App() {
  const [id_servicio,setId_servicio]=useState(0);
  const [servicio,setServicio]=useState("");
  const update=()=>{
    Axios.post("http://localhost:3001/update",{
      id_servicio: id_servicio,
      servicio:servicio
  }).then(()=>{
    listar();
    clear();
    Swal.fire({
      title:"<strong>Actualizacion exitosa!!</strong>",
      html:<i>El servicio<strong>"servicio"</strong> fue actualizado</i>
    })
  }).catch(function(error){
    Swal.fire({
      icon:'error',
      title:'Oops...',
      text:JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente mas Tarde":JSON.parse(JSON.stringify(error)).message
    })
  })
  }
  return (
    <div className="Container">

      <div className="card text-center">
        <div className="card-header">
          GESTION DE SERVICIO
        </div>
        <div className="card-body">
          <div className="formulario">
          <h3>Servicos</h3>
          <div className='info'>
          <label>NUMERO DEL SERVICIO</label>
          <input type="text" onChange={(event)=>{setId_servicio(event.target.value);
          }}
          className='="form-control' values={id_servicio}/>
          </div>
          <div className='info'>
          <label>SERVICIO</label>
          <input type="text" onChange={(event)=>{setServicio(event.target.value);
          }}
          className='="form-control' values={servicio}/>
          </div>
          <div className='card-footer text-muted'>
            {
              editar?
              <div>
                <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
                <button className='btn btn-info m-2' onClick={clear}>Limpiar</button>
              </div>
              :<button className='btn btn-success' onClick={add}>Consultar</button>
            }
                <button className='btn btn-seconday' onClick={listar}>Listar</button>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
