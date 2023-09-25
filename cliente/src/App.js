//Importar librerias


import './estilos/registro.css';

//react
import {useState} from "react";
//Axios
import Axios from "axios";
//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
//SwalAltert2
import Swal from "sweetalert2";

//componentes

import Registro from './proyecto/Registro';
import Login from './proyecto/Login';

//<div></div>
function App() {
  return (
    <div> 
        <Registro></Registro>
    </div>
  );
}


export default App;
