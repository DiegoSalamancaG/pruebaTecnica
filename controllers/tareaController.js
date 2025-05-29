import { formatStatus } from "../utils/format.js";
import {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} from "../models/tareaModels.js";

// Crear nueva tarea
export async function createTaskController(req, res) {
  try {
    const { titulo, descripcion } = req.body;
    if (!titulo)
      return res.status(400).json({ error: "El título es obligatorio" });

    const newTask = await createTask({ titulo, descripcion });

    //Emitimos el evento
    const io = req.app.get("io");
    if (io) io.emit("newTask", newTask);

    res.status(201).json({
      message: "Tarea creada correctamente",
      task: newTask,
    });
  } catch (error) {
    console.error("Error al crear la tarea:", error);
    res.status(500).json({ error: "Error al crear la tarea" });
  }
}

// Obtener todas las tareas
export async function getAllTasksController(req, res) {
  try {
    const tasks = await getAllTasks();
    const formatedTask = tasks.map(formatStatus);
    res.json({
      message: "Listado de tareas obtenido correctamente",
      total: tasks.length,
      tasks: formatedTask,
    });
  } catch (error) {
    console.error("Error al listar tareas:", error);
    res.status(500).json({ error: "Error al obtener tareas" });
  }
}

// Obtener tarea por id
export async function getTaskByIdController(req, res) {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json({
      message: "Tarea obtenida exitosamente",
      task: formatStatus(task),
    });
  } catch (error) {
    console.error("Error al obtener tarea por ID:", error);
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
}

// Actualizar una tarea
export async function updateTaskController(req, res) {
  try {
    const { id } = req.params;
    const { titulo, descripcion, status } = req.body;

    if (status !== undefined && status !== 0 && status !== 1) {
      return res.status(400).json({ error: "Status debe ser 0 o 1" });
    }

    const existsTask = await getTaskById(id);
    if (!existsTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    const taskUpdated = await updateTask(id, {
      titulo: titulo || existsTask.titulo,
      descripcion: descripcion || existsTask.descripcion,
      status: status !== undefined ? status : existsTask.status,
    });

    if (!taskUpdated) {
      return res.status(500).json({ error: "No se pudo actualizar la tarea" });
    }

    // Emitir evento WebSocket
    const io = req.app.get("io");
    io.emit("taskUpdated", { id: Number(id), status });

    const updatedTask = await getTaskById(id);
    res.json({
      message: "Tarea actualizada correctamente",
      task: formatStatus(updatedTask),
    });
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
}

// Eliminar una tarea
export async function deletedTaskController(req, res) {
  try {
    const { id } = req.params;

    const tasks = await getTaskById(id);
    if (!tasks) return res.status(404).json({ error: "Tarea no encontrada" });

    const deletedTask = await deleteTask(id);
    if (!deletedTask) {
      return res.status(500).json({ error: "No se pudo eliminar la tarea" });
    }

    res.json({
      message: "Tarea eliminada correctamente",
      deletedTask: tasks.titulo,
    });
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
}
