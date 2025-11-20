import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";


/**Creamos el enrutador */
const router = Router();

router.get("/", categoriaController.getCategorias)

/**Hacemos disponible router */
export default router;