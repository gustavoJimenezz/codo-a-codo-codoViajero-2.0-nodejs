# Tailwind: Clases Dinámicas y Safelist

## Problema

Tailwind CSS usa un compilador **JIT (Just-In-Time)** que escanea los archivos del proyecto buscando clases y solo genera el CSS de las que encuentra literalmente en el código.

Cuando se generan clases dinámicamente (ej. en EJS con JavaScript), Tailwind **no las detecta**:

```javascript
// Tailwind NO puede detectar estas clases
gridClasses = lastColSpan === 3 ? 'lg:col-span-3' : 'lg:col-span-2';
```

### Síntomas
- Las clases aparecen correctamente en el HTML del navegador
- Los estilos no se aplican (computed style muestra `auto`)
- El archivo CSS compilado no contiene las reglas

## Solución

### 1. Agregar `safelist` en `tailwind.config.js`

```javascript
module.exports = {
  content: ["./views/**/*.ejs"],
  safelist: [
    'lg:row-span-2',
    'lg:col-span-2',
    'lg:col-span-3',
  ],
  // ...resto de la configuración
}
```

El `safelist` fuerza a Tailwind a generar estas clases aunque no las encuentre en el código fuente.

### 2. Recompilar Tailwind

```bash
npm run -- -tw
```

### 3. Limpiar cache del navegador

Después de recompilar, el navegador puede seguir usando el CSS cacheado. Forzar recarga con `Ctrl+Shift+R` o desde DevTools.

## Verificación

Comprobar que las clases existen en el CSS compilado:

```bash
grep "lg:row-span\|lg:col-span" public/css/styles.css
```

## Caso de uso: Grid con elementos dinámicos

En `views/index.ejs` se implementó un grid donde:
- El primer elemento ocupa 2 filas (`lg:row-span-2`)
- El último elemento ocupa el espacio restante (`lg:col-span-2` o `lg:col-span-3`)

La cantidad de columnas del último elemento se calcula dinámicamente según el total de elementos.
