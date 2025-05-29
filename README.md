# 📝 Gestor de Tareas con Node.js, Express y SQLite

Esta es una pequeña API REST para gestionar tareas, construida con **Node.js**, **Express**, y una base de datos ligera en **SQLite**. Ideal para pruebas técnicas, proyectos personales o como base para agregar un frontend.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- SQLite
- dotenv
- nodemon (en desarrollo)
- socket.io

---

## 📁 Estructura del proyecto

```
/mi-proyecto/
├── config/             # Configuración de base de datos
│   └── db.js
├── controllers/        # Lógica de los endpoints
├── models/             # Modelo de la base de datos
├── routes/             # Rutas de la API
├── seed.js             # Script JS para insertar tareas de prueba
├── .env                # Variables de entorno
├── .gitignore
├── index.js            # Punto de entrada principal
└── package.json
```

---

## ⚙️ Instalación y configuración

1. Clona el repositorio

```bash
git clone https://github.com/DiegoSalamancaG/pruebaTecnica/
cd PruebaTecnica
```

2. Instala las dependencias

```bash
npm install
```

3. Crea un archivo `.env` en la raíz:

```
PORT=3000
DB_PATH= ./database/pruebatecnica.db
```

4. Si aún no tienes la base de datos:

```bash

# Usar script JS
npm run seed
```

---

## 🧪 Scripts disponibles

| Comando        | Descripción                              |
| -------------- | ---------------------------------------- |
| `npm start`    | Inicia la aplicación normalmente         |
| `npm run dev`  | Inicia en modo desarrollo con nodemon    |
| `npm run seed` | Ejecuta el script JS para poblar la base |

---

## 🔌 Endpoints básicos

- `GET /tasks` → Obtener todas las tareas
- `POST /tasks` → Crear nueva tarea
- `PUT /tasks/:id` → Actualizar tarea
- `DELETE /tasks/:id` → Eliminar tarea

---

## 📦 Dependencias

```bash
npm install express dotenv sqlite3 sqlite socket.io
npm install -D nodemon
```

---

## ✅ Estado actual

✔️ API funcional  
✔️ Base de datos SQLite con triggers  
✔️ Script para insertar datos de prueba (`seed.js`)  
✔️ Soporte para variables de entorno  
✔️ Estructura organizada por carpetas

---

## 💡 Ideas futuras

- Agregar validación con middleware
- Implementar autenticación básica
- Crear una interfaz frontend con React

---

## 🧑‍💻 Autor

Diego Salamanca – [(https://github.com/DiegoSalamancaG)]

---

## 📄 Licencia

MIT
