import app from "./app.js";

const main = () =>{
    app.listen(app.get("port"));
    console.log(`Servidor web corriendo satisfactoriamente en el puerto ${app.get("port")}`);
}

main();