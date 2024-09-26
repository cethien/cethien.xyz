FROM oven/bun:latest AS builder
WORKDIR /app
COPY . .
RUN bun install && bun run build

FROM caddy:latest AS runner
COPY --from=builder /app/build /srv
ENTRYPOINT [ "caddy", "file-server", "--root", "/srv" ]