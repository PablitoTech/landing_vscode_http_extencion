import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0d1117',
          subtle: '#161b22',
          inset: '#010409',
        },
        border: {
          DEFAULT: '#30363d',
          muted: '#21262d',
        },
        fg: {
          DEFAULT: '#e6edf3',
          muted: '#8b949e',
          subtle: '#6e7681',
        },
        accent: {
          DEFAULT: '#1f6feb',
          emphasis: '#388bfd',
          muted: '#1f6feb33',
        },
        success: {
          DEFAULT: '#3fb950',
          emphasis: '#2ea043',
        },
        danger: {
          DEFAULT: '#f85149',
          emphasis: '#da3633',
        },
        warning: {
          DEFAULT: '#d29922',
          emphasis: '#9e6a03',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
