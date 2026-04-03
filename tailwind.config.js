/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          archivo: ["Archivo", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
        colors: {
          // Primary Colors (Office Chat)
          dark: {
            50: "#131313",
            100: "#1a1a1a",
            200: "#2e333d",
            300: "#3a3f47",
            400: "#4a505a",
            500: "#5a6070",
          },
          accent: {
            50: "#f0f4ff",
            100: "#e0e9ff",
            200: "#6b8afd",
            300: "#5a79ec",
            400: "#4968db",
            500: "#3857ca",
          },
          // Legacy colors
          'primary': "#009DA5",
          'secondary': "#0D6CE8",
          'success': "#4ade80",
          'error': "#ef4444",
          'warning': "#f59e0b",
          'info': "#3b82f6",
        },
        fontSize: {
          xs: ["0.75rem", { lineHeight: "1rem" }],
          sm: ["0.875rem", { lineHeight: "1.25rem" }],
          base: ["1rem", { lineHeight: "1.5rem" }],
          lg: ["1.125rem", { lineHeight: "1.75rem" }],
          xl: ["1.25rem", { lineHeight: "1.75rem" }],
          "2xl": ["1.5rem", { lineHeight: "2rem" }],
          "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
          "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        }
      }
    },
    plugins: [animate]
  }
  