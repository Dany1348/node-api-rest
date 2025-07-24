# node-api.-rest

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    {"name":"Galaxy 5000" , "price": 3000 , "categories" : "Cellphone" },
    {"name":"Nokia 2000" , "price": 2800 , "categories" : "Cellphone" },
    {"name":"Tesla 500" , "price": 35000 , "categories" : "Autocar" },
    {"name":"Apple 1000" , "price": 8000 , "categories" : "Computer" }

]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=Apple 3000`
- **Respuesta ejemplo:**

```json
[{
    "id": "QD2Hrk2QsvchIR0QMtVh",
    "categories": "Computer",
    "name": "Apple 3000",
    "price": 18000
  }]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/QD2Hrk2QsvchIR0QMtVh`
- **Respuesta ejemplo:**

```json
{
  "id": "QD2Hrk2QsvchIR0QMtVh",
  "categories": "Computer",
  "name": "Apple 3000",
  "price": 18000
}
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{
    "categories": "Computer",
    "name": "Apple 3000",
    "price": 18000
  }
```

- **Respuesta ejemplo:**

```json
{
    "id": "QD2Hrk2QsvchIR0QMtVh",
    "categories": "Computer",
    "name": "Apple 3000",
    "price": 18000
  }
```

### Actualizar un producto (PUT)

- **PUT** `/products/:id`
- **Descripción:** Actualiza completamente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
{ "name": "Producto Actualizado", "price": 500 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Producto Actualizado", "price": 500 }
```

### Actualizar parcialmente un producto (PATCH)

- **PATCH** `/products/:id`
- **Descripción:** Actualiza parcialmente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):** Solo los campos que se desean actualizar

```json
{ "price": 600 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Camiseta Deportiva", "price": 600 }
```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

## Códigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `404` - Not Found: Recurso no encontrado

## Estructura del proyecto

```
src/
├── middlewares/
│   └── auth.middleware.js
├── controllers/
│   └── products.controller.js
│   └── auth.controller.js
├── models/
│   └── products.model.js
│   └── firebase.js
└── routes/
    └── products.router.js
│   └── auth.router.js    
```

## Tecnologías utilizadas

- Node.js
- Express.js
- Firebase.js
- Jsonwebtoken
- ES6 Modules