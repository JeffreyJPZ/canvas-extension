module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        'background': '#6C7F8D',
        'button': '#CF4D4D',
      }
    },
  },
  prefix: '',
  plugins: [],
}
