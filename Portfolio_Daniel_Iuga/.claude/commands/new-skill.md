Añade una nueva skill a la sección Skills del portfolio.

Pasos:
1. Pregunta al usuario: nombre de la skill y descripción corta (1-2 frases).
2. Busca en react-icons el icono más apropiado (preferir `react-icons/si` para logos de tecnologías, `react-icons/tb` para iconos de concepto).
3. Edita `src/data/skills.ts`:
   - Añade el import del icono en la parte superior.
   - Añade la nueva entrada al array `skills`:
     ```ts
     {
       id: 'kebab-case-id',
       icon: NombreIcono,
       title: 'Nombre Skill',
       description: 'Descripción...',
     }
     ```
4. Ejecuta `npm run build` para verificar que no hay errores de TypeScript.

Nota: El tipo del icono debe ser `ComponentType<{ size?: number }>`. El color se aplica via CSS en el componente padre — no pasar `color` ni `className` directamente al icono.
