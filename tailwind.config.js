import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./layouts/**/*.html', './content/**/*.md'],
	darkMode: 'class',
	plugins: [addDynamicIconSelectors()]
};
