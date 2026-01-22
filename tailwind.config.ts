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
        accent: '#c06040',
        'accent-hover': '#a04e32',
        'text-primary': '#1a1a1a',
        'text-light': '#666666',
        border: '#eeeeee',
        'section-bg': '#f9f9f9',
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
