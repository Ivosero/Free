# Camelia Hotel — landing demo

Landing responsive de una sola pantalla para presentar al cliente. Incluye un
video de fondo con imagen de respaldo original, marca provisional, teléfono y
botón de reserva externo preparado para PeekPro.

## Ejecutar localmente

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Personalizar

Los textos y enlaces están en `app/page.tsx`. Cambiar `BOOKING_URL` por el enlace
real de PeekPro. El video está en `public/hero-resort.mp4` y su imagen de respaldo
en `public/hero-fallback.png`. El aspecto visual y la adaptación móvil están en
`app/globals.css`.

## Recurso audiovisual

El video de demostración pertenece a Mikhail Nilov y fue descargado desde
[Pexels](https://www.pexels.com/video/drone-footage-of-a-tropical-beach-resort-9432067/),
donde figura como contenido de uso gratuito. Antes de la entrega definitiva se
puede sustituir por el video que suministre el cliente.

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
