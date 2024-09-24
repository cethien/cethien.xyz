FROM oven/bun:latest AS builder
WORKDIR /app
COPY . .
RUN bun install && bun run build

FROM busybox:latest AS runner
RUN adduser -D static
USER static
WORKDIR /home/static
COPY --from=builder /app/dist .
EXPOSE 3000
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]