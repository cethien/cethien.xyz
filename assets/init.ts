import Alpine from 'alpinejs';

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

document.addEventListener('alpine:init', () => {
	const theme = getTheme();

	if (theme === 'dark') {
		document.documentElement.classList.add('dark');
	}

	Alpine.store('theme', {
		on: Alpine.$persist(getTheme()).as('theme'),
		get: getTheme(),
		toggle() {
			let theme = getTheme();
			console.log(theme);

			if (theme === 'light') {
				theme = 'dark';
				document.documentElement.classList.add('dark');
			}

			if (theme === 'dark') {
				theme = 'light';
				document.documentElement.classList.remove('dark');
			}
			console.log(theme);

			localStorage.setItem('theme', theme);
		}
	});
});
