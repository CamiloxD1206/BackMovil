import app from "./src/app.js";
import { connectDB } from './db.js';


connectDB();
app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});