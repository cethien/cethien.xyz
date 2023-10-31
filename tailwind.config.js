const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./themes/**/layouts/**/*.html', './content/**/*.md'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [addDynamicIconSelectors()]
};
