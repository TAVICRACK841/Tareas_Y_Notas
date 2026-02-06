/** @type {import('tailwindcss').Config} */
export default {
	// Esta línea es la MÁS importante: le dice a Tailwind dónde buscar tus clases
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Aquí podrás agregar tus propios colores, fuentes, etc.
		},
	},
	plugins: [],
}