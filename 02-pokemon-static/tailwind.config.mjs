/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
			},
			gridTemplateColumns: {
				'8': 'repeat(8, minmax(0, 1fr))',
			}
		},
	},
	variants: {
		extend: {
			gridTemplateColumns: ['3xl'],
		},
	},
	plugins: [],
}
