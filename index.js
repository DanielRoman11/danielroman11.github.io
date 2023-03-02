import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import router from "./router/routes.js";


const app = express()

//Trayendo la ruta absoluta con dirname y fileURLToPath
const __dirname = dirname(fileURLToPath(import.meta.url))

// Setters
app.set("views", join(__dirname, 'views')) //join se utiliza para que el slash sea el adecuado dependiendo del sistema operativo
app.set("view engine", "ejs" )

app.set(express.static(join(__dirname, 'images')))
app.use(router) //utilizando el rutero de la carpeta /routes

app.use(express.static(join(__dirname, 'public')))
// console.log(('public','/images')); //prueba: Vista de imágenes con nombres

app.listen(3000)
console.log('Servidor en el puerto', 3000);