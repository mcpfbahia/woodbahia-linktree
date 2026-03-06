/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wood': {
                    50: '#fdf8f3',
                    100: '#f9ede0',
                    200: '#f0d5b8',
                    300: '#e5b98a',
                    400: '#d4915a',
                    500: '#c17035',
                    600: '#a85b28',
                    700: '#8b4520',
                    800: '#6b3318',
                    900: '#3d1e0e',
                    950: '#1f0e07',
                },
                'bark': {
                    light: '#f5efe6',
                    medium: '#dcc5a8',
                    dark: '#6B4C3B',
                },
                'forest': '#2D5016',
                'stone': '#8B8B7A',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Playfair Display', 'Georgia', 'serif'],
            },
            animation: {
                'gradient-x': 'gradient-x 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow': {
                    '0%': { 'box-shadow': '0 0 5px rgba(161,107,57,0.3)' },
                    '100%': { 'box-shadow': '0 0 20px rgba(161,107,57,0.8), 0 0 40px rgba(161,107,57,0.4)' },
                },
                'shimmer': {
                    '0%': { 'background-position': '-200% 0' },
                    '100%': { 'background-position': '200% 0' },
                },
            },
        },
    },
    plugins: [],
}
