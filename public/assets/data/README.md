# Estructura de Datos (JSON) - Portfolio v3

Este directorio contiene los archivos JSON que alimentan el portfolio. Cada archivo tiene una versión en español (`*_es.json`) y una versión en inglés (`*_en.json`).

## Proyectos (`proyecto_es.json` / `proyecto_en.json`)

Los proyectos se definen en un array bajo la clave `"proyecto"`.

### Estructura de un Proyecto:

```json
{
  "imagen": "nombre_imagen.png",
  "titulo": "Título del Proyecto",
  "descripcion": "Descripción detallada de lo que hace el proyecto y su impacto.",
  "link": "https://github.com/MarcRoviraP/repo",
  "plataforma": "Escritorio / Móvil / Web",
  "technologies": ["Python", "Flet", "Pandas"]
}
```

### Campos:

- **`imagen`**: Nombre del archivo de imagen ubicado en `/public/assets/proyects_thumbnails/`.
- **`titulo`**: Nombre comercial o técnico del proyecto.
- **`descripcion`**: Breve explicación del proyecto. Procura que sea atractiva.
- **`link`**: Enlace al repositorio de GitHub o URL del proyecto.
- **`plataforma`**:
  - En español: `Escritorio`, `Móvil` o `Web`.
  - En inglés: `Desktop`, `Mobile` o `Web`.
- **`technologies`**: Lista de tecnologías. Cada tecnología debe tener un icono correspondiente en `/public/assets/tech_icos/` con el nombre `[Tech].png` (ej: `Python.png`).

---

## Experiencia (`experiencia_es.json` / `experiencia_en.json`)

La experiencia profesional y académica se define en un array bajo la clave `"experiencia"`.

### Estructura de Experiencia:

```json
{
  "funcion": "Cargo o Rol desempeñado",
  "lugar": "Nombre de la empresa o centro de estudios",
  "fecha": "Septiembre 2023 - Febrero 2025",
  "descripcion": "Descripción de las responsabilidades, logros o materias cursadas."
}
```

### Campos:

- **`funcion`**: Tu rol (ej: Software Developer, Técnico Superior).
- **`lugar`**: Dónde realizaste la actividad.
- **`fecha`**: Rango de tiempo (ej: `Enero 2024 - Actualidad`).
- **`descripcion`**: Detalle de lo que hiciste o aprendiste.

---

## Notas de Sincronización

Este portfolio está diseñado para ser actualizado automáticamente mediante la skill `portfolio-sync`. Al añadir un nuevo proyecto:

1. Asegúrate de que las imágenes existan en sus carpetas correspondientes.
2. Mantén la consistencia entre los archivos de ES y EN.
3. Verifica que los nombres de las tecnologías en `technologies` coincidan exactamente con los archivos de iconos (case-sensitive).
