API REST con Express – CRUD Básico de Usuarios

Este proyecto es una API REST creada con Node.js y Express, diseñada para practicar los fundamentos esenciales de creación de APIs, manejo de rutas, envío de datos en formato JSON y operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
Es compatible con herramientas como Thunder Client, Postman o cualquier cliente HTTP.



Características del proyecto

Servidor creado con Express

Rutas GET, POST, PUT y DELETE

Uso de JSON para enviar respuestas

Manejo básico de errores

CRUD completo sobre un arreglo local llamado usuarios

Base ideal para implementar conexiones a bases de datos, sistemas embebidos, páginas web u otros servicios

/////////////////////////////////////////////////////////////////////////////////////////

project/
│── index.js        # Código principal del servidor
│── package.json    # Dependencias y scripts del proyecto


Node.js (v14+ recomendado)

Express

////////////////////////////////////////////////////////////////////////////////////////

Rutas disponibles
GET /

Devuelve un mensaje simple.

GET /hola

Devuelve un mensaje, autores y fecha en formato JSON.

GET /user

Devuelve todos los usuarios registrados.

POST /user

Agrega un nuevo usuario.
PUT /user/:id

Actualiza un usuario existente buscando por su ID.

DELETE /user/:id

Elimina un usuario por ID.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Uso con Thunder Client

Abrir la pestaña "Thunder Client" en Visual Studio Code.

Crear una nueva Request.

Seleccionar el método correspondiente (GET, POST, PUT o DELETE).

Colocar la URL (por ejemplo, http://localhost:3000/user).

Enviar datos JSON en las rutas que lo requieran.
