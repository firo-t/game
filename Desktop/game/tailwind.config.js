/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a0e27',
        'secondary-dark': '#1a1f3a',
        'tertiary-dark': '#2d3561',
        'neon-blue': '#00d4ff',
        'neon-orange': '#ff6b35',
        'neon-white': '#ffffff',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.5)',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      backdropBlur: {
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
      },
    },
  },
  plugins: [],
}
