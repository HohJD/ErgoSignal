# DigiHealth

Privacy-first digital ergonomics for screen-heavy work. This repository contains the DigiHealth pilot landing page, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

The app is ready to deploy to Vercel or any Node.js host that supports Next.js App Router.

## Pilot form

`/api/pilot` is a server-side endpoint. To deliver submissions to a secure CRM, hosted form, or automation service, configure `PILOT_FORM_WEBHOOK_URL` in the deployment environment. It is intentionally never exposed to the browser. Without it, the endpoint accepts the request but does not retain personal data.

## Product language

DigiHealth provides alignment feedback, not medical diagnosis or medical advice. Posture analysis currently runs on macOS. Camera frames are processed in memory on-device with MediaPipe and are never saved to disk.
