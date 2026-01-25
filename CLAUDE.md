# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comunicación

- Idioma preferido: **Español**

## Project Overview

CodoViajero es una aplicación web de agencia de viajes con reserva de excursiones y control de acceso basado en roles. Arquitectura MVC con Express, Sequelize ORM y MySQL.

## Commands

```bash
# Desarrollo (servidor con hot-reload + compilador Tailwind)
npm run start:dev

# Solo servidor (con --watch)
npm start

# Base de datos
npm run db:create    # Crear base de datos
npm run db:migrate   # Ejecutar migraciones
npm run db:seed      # Poblar datos iniciales

# Compilar Tailwind CSS manualmente
npm run -- -tw
```

## Architecture

**Entry Point:** `src/index.js` → `src/app.js` (clase App que configura Express)

**MVC Structure:**
- `src/controllers/` - Objetos con métodos async que retornan `res.render()` o `res.json()`
- `src/routes/` - Handlers de rutas Express con middleware de validación
- `src/database/models/` - Modelos Sequelize con asociaciones en `associate()`
- `views/` - Templates EJS con layouts en `views/layouts/layout.ejs`

**Key Patterns:**
- Controllers exportan objeto con métodos (no clases): `controller.methodName = async (req, res) => {}`
- Modelos con paranoid mode (soft deletes) para User y Excursion
- Campos DB en snake_case, JS en camelCase
- Validación con express-validator en `src/middleware/validation.js`

## Database

**Sequelize CLI (configurado en `.sequelizerc`):**
- Models: `src/database/models/`
- Migrations: `src/database/migrations/`
- Seeders: `src/database/seeders/`

**Main Models:** User, Destination, Excursion, DetailsExcursions, ExcursionImages, Availability, Roles

**Relationships:**
- User → Role (belongsTo)
- Excursion → Destination (belongsTo)
- Excursion → DetailsExcursions, Availability (hasOne)

## Authentication

- JWT en cookies (`req.cookies.token`)
- Passwords hasheados con bcryptjs
- Auth middleware: `src/middleware/auth.js`
- Roles: `src/enums/Roles.js`

## Environment Variables (.env)

```
PORT=3000
DB_USR_NAME=
DB_PASSWORD=
DB_NAME=
DB_HOST=
ENC_PASSWORD=      # Salt rounds para bcrypt
JWT_SECRET=
```

## Frontend

- EJS con express-ejs-layouts
- Tailwind CSS + Flowbite components
- Input: `public/css/tailwind.css` → Output: `public/css/styles.css`
- Static files: `public/`

## Convenciones de Código

### Nomenclatura
- **Variables/Funciones:** camelCase
- **Clases/Modelos:** PascalCase
- **Constantes:** UPPER_SNAKE_CASE
- **Campos DB:** snake_case

### Rutas
- RESTful: GET (listar/mostrar), POST (crear), PUT (actualizar), DELETE (eliminar)
- Prefijo `/api/` para endpoints JSON
- Middleware de validación antes del controlador

### Git
- Commits en español, descriptivos y concisos
- Ramas: `feature/nombre`, `fix/nombre`, `hotfix/nombre`
