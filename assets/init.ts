type Theme = 'dark' | 'light';

function getTheme(): Theme {
	if (localStorage.getItem('theme')) {
		return localStorage.getItem('theme') as Theme;
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}

	return 'light';
}

const theme = getTheme();

if (theme === 'dark') {
	document.documentElement.classList.add('dark');
}
