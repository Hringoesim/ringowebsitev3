// vite.config.simple.ts
import { defineConfig } from "file:///workspace/ringoesim_fixed/node_modules/vite/dist/node/index.js";
import react from "file:///workspace/ringoesim_fixed/node_modules/@vitejs/plugin-react-swc/index.js";
import { componentTagger } from "file:///workspace/ringoesim_fixed/node_modules/lovable-tagger/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "/workspace/ringoesim_fixed";
var vite_config_simple_default = defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080
    },
    plugins: [
      react(),
      mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        // Proxy react-router-dom to our wrapper
        "react-router-dom": path.resolve(__vite_injected_original_dirname, "./src/lib/react-router-dom-proxy.tsx"),
        // Original react-router-dom under a different name
        "react-router-dom-original": "react-router-dom"
      }
    },
    define: {
      // Define environment variables for build-time configuration
      // In production, this will be false by default unless explicitly set to 'true'
      // In development and test, this will be true by default
      __ROUTE_MESSAGING_ENABLED__: JSON.stringify(
        mode === "production" ? process.env.VITE_ENABLE_ROUTE_MESSAGING === "true" : process.env.VITE_ENABLE_ROUTE_MESSAGING !== "false"
      )
    }
  };
});
export {
  vite_config_simple_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuc2ltcGxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3dvcmtzcGFjZS9yaW5nb2VzaW1fZml4ZWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2UvcmluZ29lc2ltX2ZpeGVkL3ZpdGUuY29uZmlnLnNpbXBsZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlL3JpbmdvZXNpbV9maXhlZC92aXRlLmNvbmZpZy5zaW1wbGUudHNcIjsvLyB2aXRlLmNvbmZpZy5zaW1wbGUudHMgLSBTaW1wbGlmaWVkIHZlcnNpb24gZm9yIHRlc3RpbmdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tICdsb3ZhYmxlLXRhZ2dlcic7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogXCI6OlwiLFxuICAgICAgcG9ydDogODA4MCxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmIGNvbXBvbmVudFRhZ2dlcigpLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgICAvLyBQcm94eSByZWFjdC1yb3V0ZXItZG9tIHRvIG91ciB3cmFwcGVyXG4gICAgICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2xpYi9yZWFjdC1yb3V0ZXItZG9tLXByb3h5LnRzeFwiKSxcbiAgICAgICAgLy8gT3JpZ2luYWwgcmVhY3Qtcm91dGVyLWRvbSB1bmRlciBhIGRpZmZlcmVudCBuYW1lXG4gICAgICAgIFwicmVhY3Qtcm91dGVyLWRvbS1vcmlnaW5hbFwiOiBcInJlYWN0LXJvdXRlci1kb21cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZpbmU6IHtcbiAgICAgIC8vIERlZmluZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZm9yIGJ1aWxkLXRpbWUgY29uZmlndXJhdGlvblxuICAgICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3aWxsIGJlIGZhbHNlIGJ5IGRlZmF1bHQgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHRvICd0cnVlJ1xuICAgICAgLy8gSW4gZGV2ZWxvcG1lbnQgYW5kIHRlc3QsIHRoaXMgd2lsbCBiZSB0cnVlIGJ5IGRlZmF1bHRcbiAgICAgIF9fUk9VVEVfTUVTU0FHSU5HX0VOQUJMRURfXzogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIG1vZGUgPT09ICdwcm9kdWN0aW9uJyBcbiAgICAgICAgICA/IHByb2Nlc3MuZW52LlZJVEVfRU5BQkxFX1JPVVRFX01FU1NBR0lORyA9PT0gJ3RydWUnXG4gICAgICAgICAgOiBwcm9jZXNzLmVudi5WSVRFX0VOQUJMRV9ST1VURV9NRVNTQUdJTkcgIT09ICdmYWxzZSdcbiAgICAgICksXG4gICAgfSxcbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLHVCQUF1QjtBQUNoQyxPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyw2QkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsaUJBQWlCLGdCQUFnQjtBQUFBLElBQzVDLEVBQUUsT0FBTyxPQUFPO0FBQUEsSUFDaEIsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBO0FBQUEsUUFFcEMsb0JBQW9CLEtBQUssUUFBUSxrQ0FBVyxzQ0FBc0M7QUFBQTtBQUFBLFFBRWxGLDZCQUE2QjtBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSU4sNkJBQTZCLEtBQUs7QUFBQSxRQUNoQyxTQUFTLGVBQ0wsUUFBUSxJQUFJLGdDQUFnQyxTQUM1QyxRQUFRLElBQUksZ0NBQWdDO0FBQUEsTUFDbEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
