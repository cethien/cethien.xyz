const { addDynamicIconSelectors } = require('@iconify/tailwind')
const typography = require('@tailwindcss/typography')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [addDynamicIconSelectors(), typography]
}