import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { registerSW } from 'virtual:pwa-register';

// Register service worker for PWA - only in production to avoid dev caching
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      updateSW(true);
    },
    onOfflineReady() {
      console.log('App ready to work offline');
    },
  });
} else {
  // In development, ensure any existing service workers are unregistered to prevent stale caches
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
    // Best-effort cache cleanup
    if (typeof caches !== 'undefined' && caches.keys) {
      caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
