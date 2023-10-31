dev:
	@hugo server &
		pnpm tailwindcss --watch --minify -i ./styles.css -o ./themes/my-theme/assets/css/main.min.css

format:
	@pnpm prettier --write ./**/*.{html,js,json,md}