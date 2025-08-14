# 🌸 Maternidad y Emociones — Frontend

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-3.x-F7DF1E?logo=vue.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

Aplicación web desarrollada en **Vue.js** para el emprendimiento **Maternidad y Emociones**, un espacio de presentación y blog orientado a la maternidad y el desarrollo emocional.

El frontend está desplegado en **Vercel** y se conecta con una API en Node.js y MongoDB Atlas.

🔗 **Sitio en producción:** [maternidadyemociones.com.ar](https://maternidadyemociones.com.ar)

---

## 🚀 Tecnologías principales

- **[Vue 3](https://vuejs.org/)** — Framework progresivo para interfaces de usuario.
- **[Vue Router](https://router.vuejs.org/)** — Enrutamiento de páginas.
- **[Pinia](https://pinia.vuejs.org/)** — Manejo de estado global.
- **[Axios](https://axios-http.com/)** — Cliente HTTP para consumir la API.
- **[TailwindCSS](https://tailwindcss.com/)** — Estilos y diseño responsive.
- **[Vite](https://vitejs.dev/)** — Herramienta de desarrollo rápida y optimizada.

---

## 📂 Estructura del proyecto

```
├── src/
│   ├── assets/          # Recursos estáticos (imágenes, estilos globales)
│   ├── components/      # Componentes reutilizables
│   ├── router/          # Configuración de rutas
│   ├── stores/          # Estados globales (Pinia)
│   ├── views/           # Vistas principales
│   ├── App.vue          # Componente raíz
│   └── main.js          # Punto de entrada de la app
├── public/              # Archivos públicos
├── package.json         # Configuración de dependencias y scripts
└── vite.config.js       # Configuración de Vite
```

---

## ⚙️ Instalación y uso local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/mplp88/maternidad-y-emociones.git
   cd maternidad-y-emociones
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**  
   Crear un archivo `.env` en la raíz del proyecto basándote en `.env.example`:
   ```env
   VITE_API_URL=https://tu-api.com
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

6. **Previsualizar la build**
   ```bash
   npm run preview
   ```

---

## 📜 Scripts disponibles

| Comando           | Descripción                                        |
|-------------------|----------------------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo con Vite          |
| `npm run build`   | Construye el proyecto para producción              |
| `npm run preview` | Previsualiza el build de producción                |
| `npm run lint`    | Ejecuta ESLint y corrige errores automáticamente   |
| `npm run format`  | Formatea el código usando Prettier                 |

---

## 🌐 Despliegue

Este proyecto está desplegado en **[Vercel](https://vercel.com/)**.  
Cada cambio en la rama `main` se despliega automáticamente.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.  
Puedes usarlo, modificarlo y distribuirlo libremente citando la fuente.

---
💡 _Desarrollado con amor y código limpio._
