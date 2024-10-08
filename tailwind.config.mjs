/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				app: {
					100: "#0A327B",
					200: "#F65552",
					300: "#1C202B",
					400: "#5E6778",
					500: "#939CAD",
					600: "#E5EFFA",
					700: "#DDE7EE",
					800: "#F7FAFD",
					900: "#FFFFFF",
				},
			},
			boxShadow: {
				"app": "0px 20px 60px 0 rgba(73, 97, 168, 0.05)",
				"inner-box": "inset 0 0 1px 1px rgba(221, 231, 238, 1)",
			},
			maxWidth: {
				"3xl": "45.625rem",
			},
			maxHeight: {
				"3xl": "52.5rem",
			},
		},
	},
	plugins: [],
}
