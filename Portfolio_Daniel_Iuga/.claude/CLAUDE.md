# Portfolio Daniel Iuga — Contexto del Proyecto

## Stack técnico

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5 con plugin react-swc
- **Estilos:** Tailwind CSS 3 (utility-first, sin CSS modules)
- **Iconos:** react-icons v5 — usar `ComponentType<{ size?: number }>` como tipo, pasar color via `style={{ color }}` en el div padre (los SVGs usan `fill="currentColor"`)
- **Fuente principal:** Lora (Google Fonts, cargada en `index.html`) → clase `font-lora`
- **Fuente body:** Arial/sistema → clase `font-sans`

## Design system (paleta)

| Token Tailwind    | Hex       | Uso                                      |
|-------------------|-----------|------------------------------------------|
| `navy`            | #1a2744   | Textos principales, nav sólido, footer   |
| `brown`           | #7c4f2a   | CTAs sobre fondo claro, acentos          |
| `gold`            | #c9a84c   | Highlights, bordes activos, eyebrow      |
| `cream`           | #f5f0e8   | Fondo general                            |
| `cream-border`    | #f0e8d8   | Bordes de cards y separadores            |
| `amber-dark`      | #1e1408   | Fondo Hero y secciones oscuras           |
| `gold-bright`     | #e8c547   | CTAs sobre fondo oscuro                  |
| `cream-text`      | #f5edd8   | Texto sobre fondo oscuro                 |
| `amber-text`      | #b89e78   | Texto secundario sobre fondo oscuro      |
| `amber-muted`     | #9a856a   | Labels pequeños sobre fondo oscuro       |

## Estructura de archivos

```
src/
├── App.tsx                      ← Solo orquesta secciones
├── data/
│   ├── skills.ts               ← Array de skills (editar aquí para añadir/quitar)
│   ├── projects.ts             ← Array de proyectos
│   └── services.ts             ← Array de servicios
├── hooks/
│   └── useScrollAnimation.ts   ← Intersection Observer para fade-in
├── Components/
│   ├── Header.tsx              ← Nav transparente → navy al scroll
│   ├── Hero.tsx                ← Sección hero dark amber + SVG
│   ├── DarkSectionBg.tsx       ← SVG de rayos/gradientes para fondos oscuros
│   ├── SectionHeader.tsx       ← Eyebrow + título + divisor gold (reutilizable)
│   ├── Skills.tsx              ← Sección Skills (usa SkillsItem)
│   ├── SkillsItem.tsx          ← Card individual de skill
│   ├── Services.tsx            ← Sección Servicios
│   ├── Projects.tsx            ← Sección Proyectos (usa Project)
│   ├── Project.tsx             ← Card individual de proyecto
│   ├── About.tsx               ← Sección About con foto y stats
│   ├── ContactModal.tsx        ← Modal de contacto con ARIA + feedback
│   └── Footer.tsx              ← Footer navy con links
public/
├── imagen_Dani.jpg             ← Foto hero
├── foto_Dani2.jpg              ← Foto about
├── data_format.png             ← Imagen proyecto 1
├── interes.png                 ← Imagen proyecto 2
├── amortizacion.png            ← Imagen proyecto 3
└── CV Dani Iuga.pdf            ← CV descargable
```

## Patrones de código

### Añadir una skill
Editar `src/data/skills.ts`, añadir entrada al array `skills`. El icono debe ser de react-icons y tipado como `ComponentType<{ size?: number }>`.

### Añadir un proyecto
Editar `src/data/projects.ts`, añadir entrada al array `projects`. Incluir `tags: string[]` con las tecnologías usadas. Poner la imagen en `public/`.

### Añadir un servicio
Editar `src/data/services.ts`, añadir entrada al array `services`.

### Animaciones de scroll
Usar el hook `useScrollAnimation()` en el componente padre de la sección. Pasar `visible` e `index` a las cards hijas para stagger delay mediante `style={{ transitionDelay }}`.

### Secciones oscuras
Envolver el contenido con `<div className="relative bg-amber-dark">` e incluir `<DarkSectionBg />` como primer hijo con `className="absolute inset-0"`.

## Servicios externos

- **Formspree:** `https://formspree.io/f/mldryvvl` — endpoint del ContactModal
- **Botpress:** Scripts en `index.html` (chatbot widget)
- **Vercel:** Hosting de los proyectos del portfolio

## Comandos útiles

```bash
npm run dev      # Dev server en localhost:5173
npm run build    # TypeScript check + build de producción
npm run lint     # ESLint
npm run preview  # Preview del build
```
