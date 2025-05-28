import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import tareasRoutes from "./routes/tareasRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//parsear JSON
app.use(express.json());

app.use("api/tasks", tareasRoutes);

const init = async () => {
  const db = await connectDB();
  console.log("Base de datos SQLite conectada.");
};

init();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto :${PORT}`);
  console.log("Api");
  console.log(`http://localhost:${PORT}/api/tasks`);
});
