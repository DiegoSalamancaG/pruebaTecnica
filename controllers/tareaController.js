import {
  getAllTareas,
  getTareaById,
  deleteTarea,
  updateTarea,
  createTarea,
} from "../models/tareaModels.js";

export async function crearTarea(req, res) {
  try {
    //deconstruimos la peticion
    const { titulo, descripcion } = req.body;
    if (!titulo)
      return res.status(400).json({ error: "El título es obligatorio" });

    //creamos la tarea
    await createTarea({ titulo, descripcion });
    res.status(201).json({
      mensaje: "Tarea creada correctamente",
      status: 200,
      tarea: {
        titulo,
        descripcion,
        status: "pendiente",
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
}

export async function listarTareas(req, res) {
  try {
    //obtenemos todas las tareas
    const tareas = await getAllTareas();
    res.json({
      mensaje: "Listado de tareas obtenido correctamente",
      total: tareas.length,
      tareas,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas" });
  }
}

export async function obtenerTareaPorId(req, res) {
  try {
    //buscamos la tarea
    const tarea = await getTareaById(req.params.id);
    if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });

    res.json({
      mensaje: "Tarea obtenida exitosamente",
      tarea,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
}

export async function actualizarTarea(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    //buscamos la tarea por id
    const tareaActual = await getTareaById(id);
    if (!tareaActual)
      return res.status(404).json({ error: "Tarea no encontrada" });

    //actualizamos la tarea
    await updateTarea(id, { status });

    //obtenemos la nueva tarea
    const tareaActualizada = await getTareaById(id);

    res.json({
      mensaje: "Tarea actualizada correctamente",
      tarea: tareaActualizada,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
}

export async function eliminarTarea(req, res) {
  try {
    const { id } = req.params;

    //buscamos la tarea a eliminar
    const tarea = await getTareaById(id);
    if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });

    //eliminamos la tarea
    await deleteTarea(id);
    res.json({
      mensaje: "Tarea eliminada correctamente",
      tareaEliminada: tarea,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
}
