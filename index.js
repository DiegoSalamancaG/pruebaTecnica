import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import tareasRoutes from "./routes/tareasRoutes.js";

//agregamos el socket.io
import { createServer } from "http";
import { Server } from "socket.io";

//cors
import cors from "cors";

dotenv.config();

const app = express();
const httpServer = createServer(app);

//configuramos socket
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

//inicializamos(?) io
app.set("io", io);

//middleware
app.use(cors());
app.use(express.json());

//rutas
app.use("/api/tasks", tareasRoutes);

//conexion  websocket
io.on("connection", (socket) => {
  console.log("Cliente conectado vía webSocket:", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });
});

const PORT = process.env.PORT || 3001;

//conectamos con ddbb
const init = async () => {
  await connectDB();
  console.log("Base de datos SQLite conectada.");
};

httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Api disponible http://localhost:${PORT}/api/tasks`);
});

init();
