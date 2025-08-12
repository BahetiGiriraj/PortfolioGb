import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // The 'base' option is crucial for deployment, especially to hosting services
  // like GitHub Pages where your project might be in a subdirectory.
  // Uncomment the line below and set it to your repository name if needed.
  // Example: base: '/your-repository-name/',
  // You can also use an environment variable for more flexibility.
  // base: process.env.VITE_BASE_PATH || '/',

  server: {
    // This configuration allows the dev server to be accessed from your local network
    host: "::",
    port: 8080,
  },

  plugins: [
    // This plugin enables React Fast Refresh and uses SWC for speed
    react(),

    // The componentTagger plugin is conditionally enabled only in development mode
    mode === 'development' && componentTagger(),
  ].filter(Boolean), // Filters out any 'false' values from the plugins array

  resolve: {
    alias: {
      // Configures the '@' alias to resolve to the 'src' directory.
      // This allows you to use cleaner imports like '@/components/Header'.
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));