import express from "express";
import {
  listarTareas,
  obtenerTareaPorId,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} from "../controllers/tareaController.js";

//inicializamos el router
const router = express.Router();

//creamos las rutas para Tareas
router.get("/", listarTareas);
router.get("/:id", obtenerTareaPorId);
router.post("/", crearTarea);
router.put("/:id", actualizarTarea);
router.delete("/:id", eliminarTarea);

//exportamos el router
export default router;
