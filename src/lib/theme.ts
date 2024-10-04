export type Theme = 'light' | 'dark'

export function getTheme(): Theme {
	if (localStorage.getItem('theme')) {
		return localStorage.getItem('theme') as Theme
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export function setTheme(theme: Theme) {
	if (theme === 'dark') {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}

	localStorage.setItem('theme', theme)
}

export function toggleTheme() {
	const theme = getTheme()
	setTheme(theme === 'dark' ? 'light' : 'dark')
}
