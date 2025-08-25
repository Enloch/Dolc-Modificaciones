import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [
		react({
			// Add this line
			include: "**/*.{jsx,svg,png,jpg,gif,webp,glb}",
		}),
		// Agregar el plugin de visualización solo en modo analyze
		mode === "analyze" &&
			visualizer({
				filename: "dist/stats.html",
				open: true,
				gzipSize: true,
				brotliSize: true,
			}),
	],
	server: {
		host: true,
		open: {
			browser: "chrome",
		},
	},
	build: {
		chunkSizeWarningLimit: 1600,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@global": path.resolve(__dirname, "./src/global"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@configs": path.resolve(__dirname, "./src/configs"),
			"@helpers": path.resolve(__dirname, "./src/helpers"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@modules": path.resolve(__dirname, "./src/modules"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
}));
