import { connectDB } from "../config/db.js";

//funcion para obtener todas las tareas
export async function getAllTareas() {
  const db = await connectDB();
  return db.all("SELECT * FROM tareas");
}

//funcion para agregar tarea
export async function createTarea({ titulo, descripcion }) {
  const db = await connectDB();
  const fecha = new Date().toISOString();
  return db.run(`INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)`, [
    titulo,
    descripcion,
  ]);
}

//funcion para listar una tarea
export async function getTareaById(id) {
  const db = await connectDB();
  return db.get("SELECT * FROM tareas WHERE id = ?", [id]);
}

//funcion para eliminar una tarea
export async function deleteTarea(id) {
  const db = await connectDB();
  return db.run("DELETE FROM tareas WHERE id = ?", [id]);
}

//funcion para modificar una tarea
export async function updateTarea(id, { status }) {
  const db = await connectDB();
  const fecha = new Date().toISOString();
  return db.run(
    `UPDATE tareas SET status = ?, fechaActualizacion = ? WHERE id = ?`,
    [status, fecha, id]
  );
}
