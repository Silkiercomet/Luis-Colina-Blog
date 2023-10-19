import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'comi': ['Commissioner', 'sans-serif'],
      },
    },
    colors: {
      'soft-orange': 'hsl(0, 100%, 79%)',
      'hard-red' : 'hsl(0, 93%, 64%)',
      'medium-gray': 'hsl(240, 12%, 30%)',
      'dark-blue': 'hsl(240, 14%, 11%)',
      'logo-blue': '#336A86'
    }
  },
  plugins: [],
}
export default config
