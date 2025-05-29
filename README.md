# 📝 Gestor de Tareas con Node.js, Express y SQLite

## ✨ Descripción del Proyecto

Este es un proyecto **API REST** que simula un **Gestor de Tareas (To-Do List)**. Construido con **Node.js** y **Express**, utiliza **SQLite** como una base de datos ligera, lo que lo hace perfecto para prototipos, pruebas técnicas o como base para un frontend más robusto.

El diseño del proyecto intenta seguir un patrón **MVC (Modelo-Vista-Controlador)** para asegurar la escalabilidad y facilitar el mantenimiento del código. Además, incorpora **Socket.IO** para ofrecer **actualizaciones en tiempo real**, lo que permite que tu interfaz de usuario refleje los cambios de las tareas instantáneamente (creación, actualización y eliminación).

---

## 🚀 Tecnologías utilizadas

- **Node.js**: Entorno de ejecución JavaScript.
- **Express**: Framework web rápido y minimalista para Node.js.
- **SQLite**: Base de datos SQL embebida y ligera, ideal para proyectos pequeños.
- **Socket.IO**: Biblioteca para la comunicación bidireccional en tiempo real.
- **Dotenv**: Para gestionar variables de entorno de forma segura.
- **Nodemon**: Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios.

---

## 📁 Estructura del proyecto

```
/mi-proyecto/
├── config/             # Configuración de la base de datos (conexión, etc.)
│   └── db.js
├── controllers/        # Lógica de negocio para manejar las peticiones HTTP y manipular datos
├── database/           # Contiene el archivo de la base de datos SQLite (.db)
├── models/             # Define los esquemas y métodos para interactuar con la base de datos
├── routes/             # Define los endpoints de la API y los asocia con los controladores
├── utils/              # Funciones de utilidad y módulos reutilizables
├── seed.js             # Script para inicializar y poblar la base de datos con datos de prueba
├── .env                # Archivo para las variables de entorno (no debe subirse a control de versiones)
├── .gitignore          # Especifica los archivos y directorios que Git debe ignorar
├── index.js            # Punto de entrada principal de la aplicación (servidor Express y Socket.IO)
└── package.json        # Manifiesto del proyecto y listado de dependencias
```

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/DiegoSalamancaG/pruebaTecnica/](https://github.com/DiegoSalamancaG/pruebaTecnica/)
    cd PruebaTecnica
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo llamado `.env` en la raíz de tu proyecto y añade las siguientes variables:

    ```env
    PORT=3000
    DB_PATH=./database/pruebatecnica.db
    ```

4.  **Inicializa y puebla la base de datos (opcional):**
    Si es la primera vez que ejecutas el proyecto o quieres resetear la base de datos con datos de prueba, ejecuta el script `seed`:

    ```bash
    npm run seed
    ```

---

## 🚀 Cómo Levantar la Aplicación

Para que la aplicación funcione correctamente, debes levantar tanto el **servicio de backend** como el **servicio de frontend**.

### **1. Levantar el Servicio de Backend**

Abre tu terminal (puedes usar la terminal integrada de VS Code) y ejecuta el siguiente comando desde la raíz del proyecto:

```bash
npm run dev

Este comando iniciará el servidor Express en modo desarrollo con Nodemon, lo que significa que se reiniciará automáticamente cada vez que guardes cambios en los archivos. El backend estará disponible en http://localhost:3000.

2. Levantar el Servicio de Frontend (HTML)

Usando Live Server (Recomendado para VS Code)
Esta es la forma más sencilla y cómoda si usas Visual Studio Code, ya que ofrece recarga automática del navegador.

Instala la extensión "Live Server":
En VS Code, ve a la sección de Extensiones (Ctrl+Shift+X o Cmd+Shift+X).
Busca "Live Server" de Ritwick Dey e instálala.
Inicia Live Server:
En el explorador de archivos de VS Code, haz clic derecho en tu archivo index.html.
Selecciona la opción "Open with Live Server".
Alternativamente, puedes hacer clic en el botón "Go Live" que aparece en la barra de estado inferior de VS Code.
Live Server abrirá automáticamente tu navegador en una dirección como http://127.0.0.1:5500.

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
Las principales dependencias utilizadas en este proyecto son:

express: Framework web.
dotenv: Carga variables de entorno desde un archivo .env.
sqlite3: Cliente de SQLite para Node.js.
socket.io: Habilita la comunicación bidireccional y en tiempo real.
nodemon: (Dependencia de desarrollo) Monitorea cambios para reiniciar el servidor automáticamente.
Puedes instalar todas las dependencias usando npm install.

---

## ✅ Estado Actual del Proyecto
✔️ API REST funcional: Permite crear, leer, actualizar y eliminar tareas.
✔️ Base de datos SQLite con triggers: Gestión eficiente de datos y acciones automatizadas.
✔️ Script de inicialización y poblamiento de la base de datos (seed.js).
✔️ Soporte para variables de entorno (.env): Facilita la configuración y seguridad.
✔️ Estructura de proyecto organizada: Basada en principios MVC para una mejor escalabilidad.
✔️ Actualizaciones en tiempo real: Implementación de Socket.IO para notificaciones instantáneas de cambios en las tareas.

---

## 💡 Ideas futuras

- Agregar validación de datos con middleware para los endpoints.
- Implementar un sistema de autenticación básico (JWT u OAuth).
- Desarrollar una interfaz frontend más robusta utilizando frameworks como React, Angular o Vue.js.

---

## 🧑‍💻 Autor

Diego Salamanca – [(https://github.com/DiegoSalamancaG)]

---

## 📄 Licencia

MIT
```
