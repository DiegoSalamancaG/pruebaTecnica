import { connectDB } from "../config/db.js";

// Crear nueva tarea
export async function createTask({ titulo, descripcion }) {
  try {
    const db = await connectDB();
    const result = await db.run(
      `INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)`,
      [titulo, descripcion]
    );

    return {
      id: result.lastID,
      titulo,
      descripcion,
      status: 0, // por defecto pendiente
    };
  } catch (error) {
    console.error("Error al crear tarea:", error);
    res.status(500).json({ error: "Error al crear tarea" });
  }
}

// Obtener todas las tareas
export async function getAllTasks() {
  try {
    const db = await connectDB();
    const tasks = await db.all("SELECT * FROM tareas");
    return tasks;
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    res.status(500).json({ error: "Error al obtener tareas" });
  }
}

// Obtener tarea por ID
export async function getTaskById(id) {
  try {
    const db = await connectDB();
    const tarea = await db.get("SELECT * FROM tareas WHERE id = ?", [id]);
    return tarea;
  } catch (error) {
    console.error("Error al obtener la tarea por ID:", error);
    throw error;
  }
}

// Eliminar tarea
export async function deleteTask(id) {
  try {
    const db = await connectDB();
    const result = await db.run("DELETE FROM tareas WHERE id = ?", [id]);
    return result.changes > 0;
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    throw error;
  }
}

// Actualizar tarea
export async function updateTask(id, { titulo, descripcion, status }) {
  try {
    const db = await connectDB();
    const result = await db.run(
      `
      UPDATE tareas
      SET titulo = ?, descripcion = ?, status = ? WHERE id = ?
      `,
      [titulo, descripcion, status, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    return result.changes > 0;
    res.json({ message: "Tarea actualizada correctamente" });
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    return null;
  }
}
