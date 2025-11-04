# Byteboard UI

A modern front-end web application built with React, TypeScript, and Vite. This repository contains the user interface for Byteboard.

## Table of Contents
- [About](#about)
- [Features](#features)
- [How to Build and Run Locally](#how-to-build-and-run-locally)
- [Tech Stack](#tech-stack)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

## About
Byteboard UI is a single-page application that provides a responsive and intuitive interface, allowing users to browse and search job listings and view role details. It communicates with backend services via HTTP (using Axios) and is optimized for fast development and builds via Vite

## Features
- Modern SPA built with React 19 and TypeScript
- Client-side routing with React Router DOM 7
- Responsive, accessible UI with MUI v6 and Emotion styling
- Simple API layer using Axios for HTTP requests
- Environment-based configuration via Vite `import.meta.env`
- Fast local DX: instant HMR, type-checking, and ESLint integration
- Production-ready build output via Vite (optimized assets in `dist/`)
- Clear project structure to support scaling components and routes

## How to Build and Run Locally

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ (npm is used as the package manager; `package-lock.json` is present)

### Clone the repository
```bash
git clone https://github.com/your-username/byteboard-ui.git
cd byteboard-ui
```

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
Then open http://localhost:5173/ in your browser.

### Build for production
```bash
npm run build
```
This compiles TypeScript and produces an optimized build in the `dist/` directory.

### Preview the production build locally
```bash
npm run preview
```
This serves the contents of the `dist/` directory at a local URL (shown in the terminal).

## Tech Stack
- Language: TypeScript
- Framework/Library: React 19
- Routing: React Router DOM 7
- UI Components: MUI (Material UI) v6, Emotion for styling
- HTTP Client: Axios
- Build Tool/Dev Server: Vite 6
- Linting: ESLint (with React, React Hooks, and TypeScript ESLint)
- Package Manager: npm

## Scripts
Common scripts defined in `package.json`:
- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check and build for production (`tsc -b && vite build`)
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint on the project

## Project Structure
Key files and folders at the project root:
- `src/` — Application source code (React components, routes, styles)
- `public/` — Static assets copied as-is to the build output
- `index.html` — HTML entry file used by Vite
- `vite.config.ts` — Vite configuration
- `tsconfig*.json` — TypeScript configuration files
- `eslint.config.js` — ESLint configuration
- `package.json` / `package-lock.json` — Project metadata and dependencies (npm)

## Troubleshooting
- If the dev server fails to start, ensure you are on Node.js 18 or newer: `node -v`.
- After dependency or Node upgrades, a clean reinstall can help:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- If ports conflict, Vite defaults to 5173; you can change or specify a port:
  ```bash
  npm run dev -- --port 5174
  ```

---
For additional configuration, see `package.json` scripts and `vite.config.ts`. If your environment requires API base URLs or other runtime settings, document and export them via environment variables and reference them with Vite's `import.meta.env`. 