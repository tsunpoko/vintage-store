import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#8b7355',
        'accent-hover': '#6b5a45',
        'text-primary': '#2c2c2c',
        'text-light': '#7a7a7a',
        border: '#e5e0d8',
        'section-bg': '#f7f5f2',
        cream: '#faf8f5',
        brown: {
          50: '#faf8f5',
          100: '#f0ebe4',
          200: '#e5ddd2',
          300: '#d4c8b8',
          400: '#b8a78e',
          500: '#8b7355',
          600: '#6b5a45',
          700: '#544738',
          800: '#3d342a',
          900: '#2c2620',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
        serif: ['Playfair Display', 'Sawarabi Mincho', 'serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
};

export default config;
