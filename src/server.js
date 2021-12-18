const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const {rutasUsuario} = require("./controllers/usuarioController.js");
const {rutasDashboard} = require("./controllers/mensajeroController.js"); 
require("dotenv").config();

app.use(cors()); //Middleware, permite que se conecten puertos públicos
app.use(express.json());//Middleware, convierte lo que manda usuario a JSON

app.use("/usuario", rutasUsuario);//Recortar rutas
//app.use("/envios", rutasEnvio)
//agregar rutas

app.use("/dashboard", rutasDashboard);   

mongoose.connect(process.env.URL_database) //conexión a la BD
    .then(res => console.log("Conectado a DB"))
    .catch(error => console.log(error));


app.listen(+process.env.PUERTO, () => {
    console.log("Servidor escuchando en el puerto...")
})
