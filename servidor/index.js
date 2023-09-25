
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_hotel"
    
})

app.post("/create",(req,res)=>{
    const id_usuario = req.body.id_usuario;
    const usuario = req.body.usuario;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const password = req.body.password;
    const id_tipo = req.body.id_tipo;

    db.query('INSERT INTO datos_usuario(id_usuario,usuario,nombre,apellido,correo,password,id_tipo) VALUE(?,?,?,?,?,?,?)',[id_usuario,usuario,nombre,apellido,correo,password,id_tipo],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send("registro exitoso")
        }
    })
})

app.put("/login",(req,res)=>{
    const usuario = req.body.usuario;
    const password = req.boddy.password;

    db.query('SELECT FROm usuario, password form usuarios WHERE usuario=? password=?',[usuario,password])
})

app.listen(3001,()=>{
    console.log("puerto activado")
})

