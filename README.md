# Practica 1

Este proyecto es una práctica de desarrollo web utilizando tecnologías estándar (HTML5, CSS3, JavaScript) con una arquitectura modular de carpetas.

## Estructura del Proyecto

El proyecto sigue una estructura de scaffolding donde cada pantalla o funcionalidad principal tiene su propio directorio encapsulado.

```
/
├── assets/          # Recursos estáticos (imágenes, fuentes, etc.)
├── css/             # Estilos globales
│   └── style.css    # Variables CSS (colores, fuentes) y estilos base
├── js/              # Lógica global
│   └── main.js      # Scripts compartidos
├── screens/         # Pantallas de la aplicación
│   ├── home/        # Pantalla de Inicio
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── ...
└── index.html       # Punto de entrada (Redirecciona a Home)
```

## Arquitectura de Diseño

### Colores
Se utiliza un sistema de variables CSS con una paleta generada a partir de los colores de la marca:

- **Primary (Azul Oscuro):** `#264091` (Base: `--primary-700`)
- **Secondary (Naranja):** `#EB6E08` (Base: `--secondary-500`)
- **Neutral (Gris):** `#C6C7C9` (Base: `--neutral-500`)

Se dispone de escalas completas (50-900) para cada color en `css/style.css`.

### Tipografía
La tipografía principal es **Roboto**, importada desde Google Fonts.

## Cómo ejecutar

1. Clona el repositorio.
2. Abre el archivo `index.html` en tu navegador web.
3. Serás redirigido automáticamente a la pantalla principal (`screens/home/index.html`).
