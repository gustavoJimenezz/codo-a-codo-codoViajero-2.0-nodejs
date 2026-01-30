# Autenticación con Google OAuth 2.0

**Fecha:** 2026-01-30

## Resumen

Implementación de inicio de sesión con Google OAuth 2.0 que permite a los usuarios autenticarse usando su cuenta de Google. Se integra con el sistema de autenticación existente basado en JWT, creando automáticamente usuarios nuevos si no existen en la base de datos.

## Cambios Principales

- Agregada dependencia `passport-google-oauth20` para manejo de OAuth
- Creada configuración de Passport con estrategia de Google
- Agregadas rutas `/auth/google` y `/auth/google/callback`
- Creado middleware `setUserLocals` para exponer datos del usuario a las vistas
- Actualizado navbar para mostrar nombre del usuario autenticado
- Agregado botón "Iniciar con Google" en página de login

## Flujo de Trabajo

```
[Usuario] → [Clic "Iniciar con Google"] → [Google Consent] → [Callback] → [JWT Cookie] → [Home]
```

**Paso a paso:**

1. **Inicio:** Usuario hace clic en "Iniciar con Google" en `/auth/login`
2. **Redirección:** Se redirige a `/auth/google` que inicia el flujo OAuth
3. **Consentimiento:** Google muestra pantalla de permisos (profile, email)
4. **Callback:** Google redirige a `/auth/google/callback` con código de autorización
5. **Verificación:** Passport intercambia código por token y obtiene perfil
6. **Usuario:** Se busca/crea usuario en BD con email de Google
7. **JWT:** Se genera token JWT y se guarda en cookie `token`
8. **Fin:** Usuario redirigido al home, navbar muestra su nombre

## Archivos Afectados

| Archivo | Cambio |
|---------|--------|
| `package.json` | Agregada dependencia `passport-google-oauth20` |
| `src/config/passport.js` | **Nuevo** - Configuración de estrategia Google |
| `src/controllers/auth.controller.js` | Agregado método `googleCallback` |
| `src/routes/auth.routes.js` | Agregadas rutas OAuth (`/auth/google`, `/auth/google/callback`) |
| `src/middleware/auth.js` | Agregado middleware `setUserLocals` |
| `src/app.js` | Inicialización de Passport y middleware `setUserLocals` |
| `views/layouts/partials/nav.ejs` | Mostrar nombre de usuario cuando está logueado |
| `views/login/login.ejs` | Botón "Iniciar con Google" |

## Notas Técnicas

### Variables de Entorno Requeridas

```env
GOOGLE_CLIENT_ID=tu_client_id
GOOGLE_CLIENT_SECRET=tu_client_secret
```

### Consideraciones

- Los usuarios creados vía Google no tienen contraseña (autenticación solo por OAuth)
- El `role_id: 2` se asigna por defecto a usuarios nuevos (rol usuario)
- La cookie JWT tiene duración de 1 hora (`maxAge: 60 * 60 * 1000`)
- Se usa `session: false` en el callback para no usar sesiones de Passport
- El middleware `setUserLocals` decodifica el JWT y expone `res.locals.user` a todas las vistas
