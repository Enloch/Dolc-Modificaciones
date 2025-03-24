import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Vendor chunks
					if (id.includes('node_modules')) {
						if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
							return 'vendor-react';
						}
						
						if (id.includes('@mui') || id.includes('@emotion')) {
							return 'vendor-mui';
						}
						
						if (id.includes('three')) {
							return 'vendor-three';
						}
						
						if (id.includes('styled-components') || id.includes('html2canvas') || id.includes('dompurify')) {
							return 'vendor-utils';
						}
						
						return 'vendor'; // all other node_modules
					}
					
					// App code chunks - more granular module splitting
					if (id.includes('/src/components/')) {
						return 'module-components';
					}
					
					// Split modules into logical groups based on functionality
					if (id.includes('/src/modules/')) {
						// Navigation and introduction
						if (id.includes('/01_Introduccion/') || id.includes('/02_Indice/')) {
							return 'module-intro-nav';
						}
						
						// Core product information
						if (id.includes('/03_Dolcker/') || id.includes('/04_Ventajas/')) {
							return 'module-product-core';
						}
						
						// Applications and designs
						if (id.includes('/05_Aplicaciones/') || id.includes('/06_Diseno/')) {
							return 'module-applications-design';
						}
						
						// Technical information
						if (id.includes('/07_Caracteristicas/') || id.includes('/08_Sistemas/')) {
							return 'module-technical';
						}
						
						// Supplementary content
						if (id.includes('/09_Descargas/') || id.includes('/10_Final/') || id.includes('/11_Galeria/')) {
							return 'module-supplementary';
						}
						
						// Fallback for any other modules
						return 'module-other';
					}
					
					if (id.includes('/src/contexts/')) {
						return 'module-contexts';
					}
					
					if (id.includes('/src/pages/')) {
						return 'module-pages';
					}
				}
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
