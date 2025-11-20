import express from "express";
import categoriaRoutes from "./routes/categoriaRoutes.js"


/*funcionalidad server express */
const app = express();

app.set("port", 5000) 



app.use("/api/categorias", categoriaRoutes)


export default app;

