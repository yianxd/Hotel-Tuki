const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_hotel_tuki"
});

app.post("/create", (req, res) => {
  const id_habitacion = req.body.id_habitacion;
  const habitacion = req.body.habitacion;
  const precio = req.body.precio;

  db.query('INSERT INTO habitaciones (id_habitacion, habitacion, precio) VALUES (?, ?, ?)', [id_habitacion, habitacion, precio], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send("Registro exitoso");
    }
  });
});

app.get("/habitacion", (req, res) => {
  db.query('SELECT * FROM habitaciones', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update/:id_habitacion", (req, res) => {
  const id_habitacion = req.params.id_habitacion;
  const habitacion = req.body.habitacion;
  const precio = req.body.precio;

  db.query(
    'UPDATE habitaciones SET habitacion = ?, precio = ? WHERE id_habitacion = ?',
    [habitacion, precio, id_habitacion],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id_habitacion", (req, res) => {
  const id_habitacion = req.params.id_habitacion;
  db.query('DELETE FROM habitaciones WHERE id_habitacion = ?', id_habitacion, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Puerto activo en el puerto 3001");
});
