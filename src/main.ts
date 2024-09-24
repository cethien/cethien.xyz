import * as theme from './theme'

declare global {
	interface Window {
		theme: typeof theme
	}
}
window.theme = theme

if (localStorage.getItem('theme') === 'dark') {
	document.documentElement.classList.add('dark')
}