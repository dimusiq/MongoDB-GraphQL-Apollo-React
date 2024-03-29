module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
};
