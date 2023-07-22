// vite.config.js
export default {
  // Base public path when served in production.
  base: "/article-preview/",

  // Configuration options for the development server.
  server: {
    port: 3000,
  },

  // Additional Vite plugins, if needed.
  plugins: [],

  // Additional build options, if needed.
  build: {
    outDir: "dist",
    minify: true,
    sourcemap: false,
  },
};
