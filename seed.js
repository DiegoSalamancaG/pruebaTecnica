import { connectDB } from "./config/db.js";

const tareas = [
  {
    titulo: "Estudiar Node.js",
    descripcion: "Estudiar node.js para rendir prueba",
  },
  {
    titulo: "Estudiar SQLite",
    descripcion: "Estudiar SQLite para rendir prueba",
  },
  {
    titulo: "Estudiar Triggers",
    descripcion: "Estudiar triggers en SQL para rendir prueba",
  },
  {
    titulo: "Estudiar React",
    descripcion: "Estudiar React para rendir prueba",
  },
  {
    titulo: "Estudiar Express",
    descripcion: "Estudiar Express para rendir prueba",
  },
];

async function seed() {
  const db = await connectDB();

  try {
    // Eliminar datos anteriores
    await db.run(`DELETE FROM tareas`);

    for (const tarea of tareas) {
      await db.run(`INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)`, [
        tarea.titulo,
        tarea.descripcion,
      ]);
    }

    console.log("Datos de prueba insertados correctamente.");
  } catch (error) {
    console.error("Error al ingresar datos de prueba:", error);
  } finally {
    await db.close();
  }
}

seed();
