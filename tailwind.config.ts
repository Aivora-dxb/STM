import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // STM industrial palette
        navy: {
          DEFAULT: "#0F1F36",
          950: "#0A1626",
          900: "#0F1F36",
          800: "#16294a",
          700: "#1e3560",
        },
        steel: {
          DEFAULT: "#6E6E72",
          300: "#B7BCC4",
          400: "#9AA0AA",
          500: "#6E6E72",
          600: "#565961",
        },
        // Subtle metallic accent (cool blue-steel), used sparingly
        accent: {
          DEFAULT: "#5B8DC9",
          400: "#7BA6D8",
          500: "#5B8DC9",
          600: "#3F6EA5",
        },
      },
      fontFamily: {
        // Display: engineered, wide, technical
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Body: neutral, highly legible
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(10, 22, 38, 0.24)",
        "glass-sm": "0 4px 16px rgba(10, 22, 38, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-drift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-40px)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-down": "fade-down 0.2s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
