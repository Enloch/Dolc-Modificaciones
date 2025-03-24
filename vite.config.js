import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			// Add this line
			include: "**/*.{jsx,svg,png,jpg,gif,webp}",
		}),
	],
	server: {
		host: true,
	},
	build: {
		chunkSizeWarningLimit: 1600,
	},
});
