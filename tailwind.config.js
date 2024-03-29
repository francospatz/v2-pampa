module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Muller', 'Arial', 'sans-serif'],
      'serif': ['Argent', 'Georgia', 'serif']
    },
    screens: {
      xs: '350px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        marquee: 'marquee 120s linear infinite',
        marquee2: 'marquee2 120s linear infinite',
        marqueeH: 'marqueeH 50s linear infinite',
        marqueeH2: 'marqueeH2 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marqueeH: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeH2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        'black': '#0d0d0d',
        'white': '#FFFFFF',
        'off-white': '#FCF9F0',
        'light-brown': '#242423',
        'blush': '#DBC9BF',
        'green': '#93A38D',
        'blue': '#AEB4BD',
        'brown': '#C89868'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ]
}