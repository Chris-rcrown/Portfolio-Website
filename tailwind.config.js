/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'floatReverse': 'floatReverse 8s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'driftSlow': 'driftSlow 25s ease-in-out infinite',
        'pulse-custom': 'pulse 4s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'morphing': 'morphing 15s ease-in-out infinite',
        'gradientShift': 'gradientShift 8s ease infinite',
        'particleFloat': 'particleFloat 15s linear infinite',
      },
    },
  },
  plugins: [],
};
