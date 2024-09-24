export type Theme = 'light' | 'dark'

export function getTheme(): Theme {
	const theme = localStorage.getItem('theme') as Theme
	if (theme) {
		return theme
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export function setTheme(theme: Theme) {
	if (theme === 'light') {
		document.documentElement.classList.remove('dark')
	} else {
		document.documentElement.classList.add('dark')
	}
	localStorage.setItem('theme', theme)
}

export function toggleTheme() {
	const theme = getTheme()
	setTheme(theme === 'light' ? 'dark' : 'light')
}
