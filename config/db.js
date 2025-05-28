import sqlite3 from "sqlite3";
import { open } from "sqlite";
import dotenv from "dotenv";
dotenv.config();

const db_path = process.env.DB_PATH;

export async function connectDB() {
  const db = await open({
    filename: db_path,
    driver: sqlite3.Database,
  });

  await ensureSchema(db);
  return db;
}

async function ensureSchema(db) {
  // Creamos la tabla si no existe
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tareas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL CHECK(length(titulo) <= 100),
      descripcion TEXT CHECK(length(descripcion) <= 500),
      status INTEGER DEFAULT 0 CHECK(status IN (0, 1)),
      fechaCreacion TEXT DEFAULT CURRENT_TIMESTAMP,
      fechaActualizacion TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Creamos trigger para actualizar fechaActualizacion en UPDATE
  await db.exec(`
    CREATE TRIGGER IF NOT EXISTS actualizar_fecha
    AFTER UPDATE ON tareas
    FOR EACH ROW
    BEGIN
      UPDATE tareas
      SET fechaActualizacion = CURRENT_TIMESTAMP
      WHERE id = OLD.id;
    END;
  `);
}
