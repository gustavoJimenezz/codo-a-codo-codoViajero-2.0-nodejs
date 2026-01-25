# AUDITORÍA TÉCNICA - CODO VIAJERO 2.0

## 1. STACK TECNOLÓGICO

**Lenguaje Principal:** JavaScript (Node.js)

**Backend:**
- Framework: **Express.js ^4.19.2**
- Runtime: **Node.js** (con --watch para desarrollo)

**Base de Datos:**
- Motor: **MySQL**
- Conector: **mysql2 ^3.11.0**
- ORM: **Sequelize ^6.37.3** + **sequelize-cli ^6.6.2**

**Frontend:**
- Template Engine: **EJS ^3.1.10** + **express-ejs-layouts ^2.5.1**
- CSS Framework: **TailwindCSS ^3.4.6**
- Componentes UI: **Flowbite ^2.5.2**

**Seguridad & Autenticación:**
- Hashing: **bcryptjs ^2.4.3**
- Tokens: **jsonwebtoken ^9.0.2**
- Validación: **express-validator ^7.2.0**
- Cookies: **cookie-parser ^1.4.7**

**Configuración:**
- Variables de entorno: **dotenv ^16.4.5**

**DevDependencies:**
- **concurrently ^8.2.2** (ejecución paralela de scripts)

---

## 2. ARQUITECTURA DEL PROYECTO

**Patrón Arquitectónico:** MVC (Model-View-Controller) con estructura modular

**Estructura de Carpetas:**

```
├── src/
│   ├── app.js                      # Clase principal de configuración Express
│   ├── index.js                    # Entry point de la aplicación
│   ├── controllers/                # Controladores MVC
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── excursion.controller.js
│   │   ├── detailsExcursions.controller.js
│   │   ├── availability.controller.js
│   │   ├── index.controllers.js
│   │   └── touristDestinationController.js
│   ├── routes/                     # Definición de rutas
│   │   ├── auth.routes.js
│   │   ├── users.routes.js
│   │   ├── excursions.routes.js
│   │   ├── detailsExcursions.routes.js
│   │   ├── availability.routes.js
│   │   ├── index.routes.js
│   │   └── touristDestinationRoutes.js
│   ├── database/
│   │   ├── config/
│   │   │   └── config.js           # Configuración Sequelize (dev/test/prod)
│   │   ├── models/                 # Modelos Sequelize
│   │   │   ├── index.js
│   │   │   ├── user.js
│   │   │   ├── authentication.js
│   │   │   ├── roles.js
│   │   │   ├── destination.js
│   │   │   ├── excursion.js
│   │   │   ├── detailsexcursions.js
│   │   │   ├── excursionImages.js
│   │   │   └── availability.js
│   │   ├── migrations/             # Migraciones de base de datos
│   │   └── seeders/                # Datos semilla
│   ├── middleware/                 # Middleware personalizado
│   │   ├── auth.js
│   │   └── validation.js
│   ├── utils/                      # Utilidades
│   │   ├── handleBcrypt.js
│   │   └── generateToken.js
│   ├── constants/
│   │   └── globalConst.js
│   └── enums/
│       └── Roles.js
├── views/                          # Vistas EJS
│   ├── layouts/
│   │   ├── layout.ejs
│   │   └── partials/
│   │       ├── header.ejs
│   │       ├── nav.ejs
│   │       ├── footer.ejs
│   │       └── showExcursions.ejs
│   ├── login/
│   │   ├── login.ejs
│   │   └── signUp.ejs
│   ├── index.ejs
│   ├── excursions.ejs
│   ├── excursionsByDestine.ejs
│   └── detailsExcursion.ejs
├── public/                         # Archivos estáticos
│   ├── css/
│   │   ├── styles.css              # CSS generado por Tailwind
│   │   └── tailwind.css            # CSS fuente de Tailwind
│   ├── js/
│   │   ├── authLogin.js
│   │   ├── authSingUp.js
│   │   └── excursionFilter.js
│   ├── img/
│   └── icons/
├── .sequelizerc                    # Configuración de rutas Sequelize
├── tailwind.config.js              # Configuración de TailwindCSS
├── .env                            # Variables de entorno
└── package.json
```

**Patrones de Diseño Identificados:**
- **Class-based architecture** (src/app.js)
- **Middleware pattern** (auth, validation)
- **Repository pattern** (Sequelize models)
- **Factory pattern** (modelos Sequelize con auto-carga)

---

## 3. DEPENDENCIAS CLAVE

**Dependencias de Producción:**

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| **express** | ^4.19.2 | Framework web principal |
| **sequelize** | ^6.37.3 | ORM para manejo de base de datos MySQL |
| **mysql2** | ^3.11.0 | Driver MySQL para Node.js |
| **bcryptjs** | ^2.4.3 | Hashing de contraseñas (10 rounds según .env) |
| **jsonwebtoken** | ^9.0.2 | Generación y verificación de JWT (expiración: 2h) |
| **express-validator** | ^7.2.0 | Validación de inputs (login, registro) |
| **cookie-parser** | ^1.4.7 | Manejo de cookies HTTP-only |
| **ejs** | ^3.1.10 | Motor de plantillas para vistas |
| **express-ejs-layouts** | ^2.5.1 | Sistema de layouts para EJS |
| **dotenv** | ^16.4.5 | Gestión de variables de entorno |
| **flowbite** | ^2.5.2 | Componentes UI basados en Tailwind |
| **pug** | ^3.0.3 | Template engine alternativo (legacy) |

**Dependencias de Desarrollo:**

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| **sequelize-cli** | ^6.6.2 | CLI para migraciones y seeders |
| **tailwindcss** | ^3.4.6 | Framework CSS utility-first |
| **concurrently** | ^8.2.2 | Ejecutar múltiples comandos en paralelo |

---

## 4. BASE DE DATOS

**ORM:** Sequelize 6.37.3

**Conexión:** MySQL local
- Host: `localhost`
- Database: `codo_viajero`

**Modelos y Relaciones Principales:**

### **User** (`users`)
- Campos: `id`, `name`, `lastname`, `email`, `role_id`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones: belongsTo `Roles`
- Soft Deletes: Habilitado (paranoid: true)

### **Authentication** (`authentications`)
- Campos: `id`, `password`, `usuario_id`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones: belongsTo `User` (usuario_id)
- Propósito: Almacenar contraseñas hasheadas separadas del usuario

### **Roles** (`roles`)
- Campos: `id`, `name`, `description`, `createdAt`, `updatedAt`, `deletedAt`
- Propósito: Sistema de roles (admin, operator, user)

### **Destination** (`destinations`)
- Campos: `id`, `name`, `description`, `img`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones: hasMany `Excursion`

### **Excursion** (`excursions`)
- Campos: `id`, `name`, `description`, `img`, `destination_id`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones:
  - belongsTo `Destination` (destination_id)
  - hasOne `DetailsExcursions` (as: 'detailsExcursion')
  - hasOne `Availability` (as: 'availability')

### **DetailsExcursions** (`detailsExcursions`)
- Campos: `id`, `excursion_id`, `description`, `duration`, `price`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones: belongsTo `Excursion`

### **ExcursionImages** (`excursionImages`)
- Campos: `id`, `excursion_id`, `img`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones: belongsTo `Excursion`

### **Availability** (`availabilities`)
- Campos: `id`, `operator_id`, `excursion_id`, `date`, `start_time`, `duration`, `createdAt`, `updatedAt`, `deletedAt`
- Relaciones: belongsTo `Excursion`, belongsTo `User` (operator_id)

**Características de la Base de Datos:**
- Timestamps automáticos en todos los modelos
- Soft Deletes implementado globalmente (paranoid: true)
- Cascada en relaciones (onDelete/onUpdate: CASCADE)
- Migraciones versionadas con Sequelize CLI

---

## 5. AUTENTICACIÓN Y SEGURIDAD

**Mecanismos de Autenticación:**

### 1. JWT (JSON Web Tokens)
- Archivo: `src/utils/generateToken.js`
- Expiración: **2 horas**
- Payload: `{ id, name }`

### 2. Bcrypt Password Hashing
- Archivo: `src/utils/handleBcrypt.js`
- Rounds: **10** (configurado en .env como ENC_PASSWORD)
- Métodos: `encrypt()` y `compare()`

### 3. Cookie-based Session
- Los tokens JWT se almacenan en cookies HTTP-only
- Configuración de cookies:
  ```javascript
  {
    httpOnly: true,      // Previene acceso desde JavaScript
    secure: true,        // Solo HTTPS
    sameSite: 'strict',  // Protección CSRF
    maxAge: 3600000      // 1 hora (60*60*1000 ms)
  }
  ```

### 4. Middleware de Autenticación
- Archivo: `src/middleware/auth.js`
- Verifica token en cookies
- Retorna 401 si no hay token o es inválido

### 5. Validación de Inputs
- Archivo: `src/middleware/validation.js`
- **validationRegister:** nombre (min 3 chars), apellido, email, password (min 6 chars), confirmación de password
- **validationLogin:** email válido, password (min 6 chars)
- Sanitización: `trim()`, `escape()`

**Flujo de Autenticación:**
1. Usuario envía credenciales a `/auth/verifyUser`
2. Se busca el usuario por email en DB
3. Se obtiene el hash de password de la tabla `authentications`
4. Se compara password con `bcrypt.compare()`
5. Si es válida, se genera JWT con `tokenSign()`
6. Token se almacena en cookie HTTP-only
7. Redirección a página principal

**Sistema de Roles:**
- Tabla `roles` con campos: `name`, `description`
- Campo `role_id` en tabla `users`
- Seeders para roles: admin, operator, user

---

## 6. FRONTEND

**Motor de Plantillas:**
- **EJS (Embedded JavaScript)** ^3.1.10
- Sistema de layouts con `express-ejs-layouts`
- Layout principal: `views/layouts/layout.ejs`

**Estructura de Vistas:**
- **Layouts:** Sistema modular con partials (header, nav, footer)
- **Páginas principales:** index, excursions, excursionsByDestine, detailsExcursion
- **Autenticación:** login, signUp

**Estilos:**
- **TailwindCSS 3.4.6** (utility-first framework)
- **Flowbite 2.5.2** (componentes pre-construidos)
- **Custom colors:**
  - `custom-blue-one: #1d4d8b`
  - `custom-blue-two: rgb(38, 27, 59)`

**Configuración Tailwind:**
```javascript
// tailwind.config.js
content: ["./views/**/*.ejs"]
```

**JavaScript del Cliente:**
- `public/js/authLogin.js` - Lógica de login
- `public/js/authSingUp.js` - Lógica de registro
- `public/js/excursionFilter.js` - Filtrado de excursiones

**Assets:**
- Iconos en `public/icons/` (redes sociales, app stores)
- Imágenes en `public/img/` (excursiones, destinos, headers)

**Fuentes Externas:**
- Google Fonts: Work Sans (weights: 200, 400)

**Características UI:**
- Carousel personalizado con CSS
- Hover effects (transform scale)
- Responsive design (viewport meta tag)
- Custom styles para navegación y controles

---

## RESUMEN EJECUTIVO

**Aplicación:** Plataforma de reservas de excursiones turísticas
**Arquitectura:** MVC modular con separación clara de responsabilidades
**Base de Datos:** MySQL con ORM Sequelize, 9 modelos relacionales
**Autenticación:** JWT con cookies HTTP-only + bcrypt
**Frontend:** EJS + TailwindCSS + Flowbite

**Scripts disponibles:**
- `npm run db:create` - Crear base de datos
- `npm run db:migrate` - Ejecutar migraciones
- `npm run db:seed` - Poblar datos semilla
- `npm start` - Servidor con hot-reload (--watch)
- `npm run start:dev` - Desarrollo concurrente (Tailwind + server)

**Entry Point:** `src/index.js` (puerto 3000)
