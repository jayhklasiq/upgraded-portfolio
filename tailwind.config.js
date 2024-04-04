module.exports = {
  // Include all files in the views directory
  content: ["views/**/*.{html,ejs}"],
  theme: {
    extend: {
      // Define custom fonts
      fontFamily: {
        // Include the custom font families
        'crimson-pro': ['Crimson Pro', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        'tenor-sans': ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
};
