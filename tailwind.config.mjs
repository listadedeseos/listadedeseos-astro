/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				custom_light_gray: '#FAFAFA',
				custom_dark_gray: '#2E2E2E',
				custom_gold: '#D4AF37'
			}
		},
	},
	plugins: [],
}
