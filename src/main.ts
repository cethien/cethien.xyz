import * as theme from './theme'

declare global {
	interface Window {
		theme: typeof theme
	}
}
window.theme = theme

if (window.theme.getTheme() === 'dark') {
	document.documentElement.classList.add('dark')
}
