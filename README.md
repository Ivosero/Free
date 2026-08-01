# Camelia Hotel — landing demo

Landing responsive de una sola pantalla para presentar al cliente. Incluye la
imagen de referencia suministrada, marca provisional, teléfono y botón de
reserva externo preparado para PeekPro.

## Ejecutar localmente

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Personalizar

Los textos y enlaces están en `app/page.tsx`. Cambiar `BOOKING_URL` por el enlace
real de PeekPro. La imagen está en `public/referencia-cliente.png`. El aspecto
visual y la adaptación móvil están en `app/globals.css`.

## Publicar en Vercel

1. Subir este directorio a un repositorio de GitHub, GitLab o Bitbucket.
2. En Vercel, elegir **Add New → Project** e importar el repositorio.
3. Vercel reconocerá Next.js automáticamente; no hace falta cambiar los ajustes.
4. Pulsar **Deploy**.

También se puede desplegar desde una terminal con `npx vercel`.

## Verificación

```bash
npm run build
```
