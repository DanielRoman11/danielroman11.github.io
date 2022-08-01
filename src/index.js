import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express()

//Trayendo la ruta absoluta con dirname y fileURLToPath
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views')); //--> Así es como se ve la ruta absoluta puesta en el setter
// Setters
app.set("views", join(__dirname, 'views')) //join se utiliza para que el slash sea el adecuado dependiendo del sistema operativo
app.set("view engine", "ejs" )

//Getters
app.get('/', (req,res) => res.render('index'))

app.listen(3000)
console.log('Servidor en el puerto', 3000);