default: clean

clean:
	@rm -rf node_modules/ public/ && \
	bun install

format:
	@bun run format

build:
	@hugo

dev:
	@hugo server

