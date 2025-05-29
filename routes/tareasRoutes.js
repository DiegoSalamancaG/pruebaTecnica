import express from "express";
import {
  createTaskController,
  getAllTasksController,
  getTaskByIdController,
  updateTaskController,
  deletedTaskController,
} from "../controllers/tareaController.js";

//inicializamos el router
const router = express.Router();

//creamos las rutas para Tareas
router.get("/", getAllTasksController);
router.get("/:id", getTaskByIdController);
router.post("/", createTaskController);
router.put("/:id", updateTaskController);
router.delete("/:id", deletedTaskController);

//exportamos el router
export default router;
