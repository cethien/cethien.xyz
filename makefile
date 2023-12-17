.PHONY: default clean \
	update format build \
	dev

default: clean

clean:
	@rm -rf node_modules/ public/ && \
	bun install

update:
	@bun update

format:
	@bun run format

lint:
	@bun run lint

build:
	@hugo

dev:
	@hugo server --disableFastRender
