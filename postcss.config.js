// postcss.config.js
export default {
  plugins: {
    'postcss-import': {}, // If you are using imports in your CSS
    'autoprefixer': {},
    // Remove 'unocss' from here, as it should be used as a Vite plugin
  },
};
