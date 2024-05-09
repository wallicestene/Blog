/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        Primary: {
          50: "#edf4ff",
          100: "#deebff",
          200: "#c3daff",
          300: "#9fbfff",
          400: "#789bff",
          500: "#4b6bfb",
          600: "#3a4cf1",
          700: "#2d3bd5",
          800: "#2835ab",
          900: "#283487",
          950: "#181e4e",
        },
        Secondary: {
          50: "#f4f6fa",
          100: "#e7eaf2",
          200: "#d4d9e9",
          300: "#b6c1da",
          400: "#93a1c7",
          500: "#7986b8",
          600: "#6771a9",
          700: "#5b619a",
          800: "#4e527f",
          900: "#424566",
          950: "#242535",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "Open-Sans": ["Avenir", " sans-serif"],
        "Gotham-Bold": ["Gotham", "sans-serif"],
        "Gotham-Light": ["Gotham-Light", "sans-serif"],
        "AvenirHeavy": ["Avenir-heavy", "sans-serif"],
      },
      flex: {
        4: "0.4",
        6: "0.6",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
};
