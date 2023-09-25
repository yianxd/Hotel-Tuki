//estilos
import '../estilos/Login.css';
//Importar librerias
//react
import {useState} from "react";
//Axios
import Axios from "axios";
//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
//SwalAltert2
import Swal from "sweetalert2";

function Login(){

    const [usuario,setUsuario] = useState("");
    const [password,setPassword] =useState("");

    const login =()=>{
        Axios.post("http://localhost:3001/create",{
            usuario: usuario,
            password: password
        }).then(()=>{
            //limpiar();
            Swal.fire({
                title:"<strong> Registro exitoso! </strong>",
                html:"<i>Has iniciado sesion correctamente</i>",
                icon: "success",
                timer: 3000
            })
        }).catch(function(error){
            Swal.fire({
                icon: "error",
                title: 'Oops...',
                text: JSON.parse((JSON.stringify(error)).message==="Network Error"?"intente mas tarde":JSON.parse(JSON.stringify(error)).message)
            })
        });
    }


return(
    <div className='login'>
        <div className='container'>
            <div className='card text-center'>
                <div className='card-header'>
                    <div>
                        Registro
                    </div>
                    <div>
                        <label>Usuario</label>
                        <input type='text' value={usuario} onChange={event =>{setUsuario(event.target.value);
                        }} />
                        <label>Contraseña</label>
                        <input type='password' value={password} onChange={event =>{setPassword(event.target.value);
                        }}/>
                        <button className='btn btn-succes' onClick={login} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login