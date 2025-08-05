# Next.js + TanStack Router Integration

This project demonstrates how to integrate [TanStack Router](https://tanstack.com/router) inside a Next.js application to support user journeys with isolated route trees and context providers.

## 🔧 Features

- ✅ Use TanStack Router on a **single Next.js route**
- ✅ Nested subroutes (`/screen-one`, `/screen-two`)
- ✅ Default child route redirection
- ✅ Per-branch context isolation (e.g., journey-specific providers)
- ✅ Fully client-rendered using `dynamic` + `ssr: false`

## 📁 Structure

* /app/tsr-test/page.tsx
  * Next.js route entrypoint (renders TanStack app)
* /app/tsr-test/[slug]/page.tsx
  * Catch subroutes with direct navigation
* /feature/index.ts
  * exports the TanStack router and the feature context and screens routes for consumption in other TanStack Routers apps.
* /feature/router
  * Router definition for SSR integration   


## ⚠️ Notes
TanStack Router is fully client-side here — no SSR for subroutes.

Warnings like useInsertionEffect must not schedule updates may appear in React dev mode and they need to be looked at. It varies based on the tanstack router version.