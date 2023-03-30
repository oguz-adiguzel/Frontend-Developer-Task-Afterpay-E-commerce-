/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
   
    extend: {
      height: {
        '102': '102px',
      },
      width: {
        '159': '159.29px',
        '607': '607px'
      },
      colors: {
        'afterpay-orange': '#F59C4B',
        'afterpay-lightgray': '#F0F2F3',
        'afterpay-green' : '#01AD5A'
      },
    },
  },
  plugins: [],
}
