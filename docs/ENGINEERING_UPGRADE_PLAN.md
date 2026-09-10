# Engineering Upgrade Plan — franciscovitar

> **Meta:** llevar el portfolio a **BUENO+/MUY BUENO** sin rediseño.
> **Foco:** incidente Resend, `.next` versionado, endpoint de contacto, client boundaries, modal/CV/OG y quality gates.

## Contrato para la IA ejecutora

Antes de modificar:
- baseline desktop/mobile de Home, anchors, modal de proyecto y `/cv`;
- probar descarga `CV_FV.pdf` y formulario con provider mock/staging;
- preservar Inter/Sora, gradientes, Motion, cards, modal, responsive, proyectos/URLs y copy en inglés;
- no cambiar el contrato público/privado del CV sin decisión explícita;
- nunca exponer secretos.

---

# FASE 1 — P0: rotar Resend expuesto

## `app/api/contact/route.js`
API key de Resend hardcodeada en source.

## Orden obligatorio
1. Inventariar deployments/repos que usan esa credencial.
2. Crear nueva key.
3. Configurar `RESEND_API_KEY` server-only en Vercel/local.
4. Cambiar a `process.env.RESEND_API_KEY` con fail-fast seguro.
5. Probar envío.
6. Revocar key vieja.
7. `.env.example` solo con nombres.
8. Secret scan del árbol/historial.

No usar `NEXT_PUBLIC_`. No considerar borrar la línea como remediación suficiente.

---

# FASE 2 — repo hygiene: `.next/` fuera de Git

Hallazgo: `.next/` completo y caches Webpack de muchos MB están versionados; `.gitignore` es insuficiente.

## Pasos
1. Confirmar que no hay source único en `.next`.
2. Eliminar `.next` del tracking.
3. `.gitignore` completo: `.next`, out, logs, env sensibles, caches.
4. Clean clone → install → build para probar reproducibilidad.
5. No volver a versionar output generado.

---

# FASE 3 — endurecer `/api/contact`

Fortaleza: Resend ya está detrás de Route Handler.

## Target
1. Schema `{name,email,company?,message}`.
2. Trim/tipos/email válido/límites/body size.
3. `400` input inválido; errores provider/config controlados.
4. Comprobar resultado real del SDK antes de success.
5. `CONTACT_TO_EMAIL`/sender en config server-side si aporta.
6. Email text/HTML safe; replyTo solo email validado.
7. No loggear PII completa.
8. Honeypot/rate-limit proporcional si hay abuso.

## Tests
missing/type/email/whitespace/oversized/provider success/failure/env faltante.

---

# FASE 4 — `components/Contact.js`: state machine real

Fortalezas: form semántico, labels/required/autocomplete y reset solo en `res.ok`.

## Cambios
- `idle | submitting | success | error`;
- disabled durante request;
- evitar doble submit;
- error inline accesible, no `alert`;
- preservar campos en fallo;
- success solo tras endpoint real;
- timeout/abort solo si mejora UX.

No migrar obligatoriamente a Server Actions.

---

# FASE 5 — Home server-first

## `app/page.js`
Tiene `"use client"` aunque solo compone secciones.

1. Quitar directive de la page.
2. Mantener Client Components solo en secciones con Motion/state/browser APIs.
3. No convertir todas las secciones de una vez.
4. Comparar HTML/JS/hydration y visual.

---

# FASE 6 — proyectos/modal: conservar data, mejorar foco

## `data/projects.js`
Ya es buena fuente separada. Mantener y migrar a TS; no CMS/DB.

## `Projects.js`
Eliminar comentarios legacy solo si no son backlog real.

## `ProjectModal.js`
Ya tiene dialog semantics, ESC, body lock y botones.

### Gap
- focus entry;
- focus trap;
- restore al botón que abrió;
- reduced motion interno si falta.

Implementar esto sin cambiar overlay/Motion/layout.

---

# FASE 7 — `/cv`: decidir un solo contrato

Hoy:
- Hero descarga `CV_FV.pdf`;
- `/cv` dice `Download My CV` pero CTA pide CV por email.

## Decisión obligatoria
### A — CV público
`/cv` ofrece el mismo PDF y Hero mantiene descarga.

### B — CV bajo pedido
retirar PDF público/CTA directo y conservar solicitud.

**No decidir esto técnicamente sin aprobación.**

Si `/cv` se mantiene, extraer CSS-in-JSX a module stylesheet solo después de decidir contrato; client solo por Motion.

---

# FASE 8 — OpenGraph/metadata

## `app/layout.js`
Metadata rica ya es buena.

Bug: referencia `/og-image.png`, pero existen `og-image.jpg`/`.svg` y no `.png`.

## Pasos
1. Verificar MIME/contenido real de `.jpg/.svg`.
2. Elegir un único asset OG real.
3. Actualizar Metadata/JSON-LD al mismo path.
4. Validar HTTP + social preview.
5. Mantener `lang="en"/locale en_US` mientras el sitio siga en inglés.

---

# FASE 9 — Navbar/a11y

Fortalezas: navLinks único, passive+rAF, cleanup, scrollspy, button ARIA, ESC/body lock.

Gaps:
- focus inicial en mobile;
- trap/restore;
- restaurar overflow previo exacto;
- reduced motion donde falte.

Preservar anchors y comportamiento visual.

---

# FASE 10 — TypeScript/dependencies/gates

Stack es pequeño: Next14, React18, Motion, Icons, Resend, Sass. **No inflarlo**.

Prioridad TS:
1. contact route/payload;
2. `data/projects.ts`;
3. ProjectModal/Projects;
4. Contact state;
5. resto progresivo.

Gate:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run check
```

Tests: validation/API, Contact, modal focus/ESC, Navbar, anchors, CV decision, OG response, screenshots.

---

# FASE 11 — framework/performance

Con security/gates estables:
- Next/React/tooling soportados según guía oficial;
- assets/CWV medidos;
- no agregar librerías por modernización estética.

---

# Orden de PRs

1. Resend coordinado + secret scan;
2. `.next`/gitignore/reproducibilidad;
3. API Contact + Contact UX/tests;
4. root server boundary;
5. modal/Navbar a11y;
6. decisión CV + OG;
7. TypeScript/check/CI;
8. framework/performance.

---

# Definition of Done — MUY BUENO

- key vieja revocada, cero secretos en Git;
- `.next` fuera del repo;
- endpoint valida y solo confirma success real;
- Contact evita doble submit y tiene error accesible;
- Home server-first;
- modal maneja foco correctamente;
- CV tiene un solo contrato coherente;
- OG asset existe y metadata apunta bien;
- lint + typecheck + tests + E2E + build PASS;
- visual regression aprobada;
- stack sigue pequeño.

---

# Prompt para la IA ejecutora

```text
Implementá docs/ENGINEERING_UPGRADE_PLAN.md completo y en orden. No rediseñes este portfolio.

Empezá por rotar la key Resend y sacar `.next` de Git. Después endurecé contacto y recuperá la page raíz server-first. Conservá data/projects y la arquitectura simple; mejorá solo foco/modal/Navbar donde existe un gap real. No decidas por tu cuenta si el CV debe ser público o privado: detente en esa subdecisión si no está definida y conserva el estado actual hasta tenerla.

Agregá TypeScript/gates antes del framework upgrade. Corré tests/screenshots tras cada fase y no declares terminado hasta cumplir la Definition of Done.
```
