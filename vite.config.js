import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			// Add this line
			include: "**/*.{jsx,svg,png,jpg,gif,webp,glb}",
		}),
	],
	server: {
		host: true,
		open: {
			browser: 'chrome'
		}
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
		},
	},
});
