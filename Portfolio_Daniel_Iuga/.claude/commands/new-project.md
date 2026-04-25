Añade un nuevo proyecto al portfolio.

Pasos:
1. Pregunta al usuario: título, descripción (1-2 frases), URL del proyecto live, nombre del archivo de imagen (sin extensión, estará en `public/`), y tecnologías usadas (tags).
2. Edita `src/data/projects.ts` añadiendo la nueva entrada al array `projects` con el formato:
   ```ts
   {
     id: 'kebab-case-id',
     image: '/nombre-imagen.png',
     title: 'Título del proyecto',
     description: 'Descripción...',
     link: 'https://...',
     tags: ['Tag1', 'Tag2'],
   }
   ```
3. Avisa al usuario que debe copiar la imagen del proyecto a la carpeta `public/` con el nombre que indicó.
4. Ejecuta `npm run build` para verificar que no hay errores.
