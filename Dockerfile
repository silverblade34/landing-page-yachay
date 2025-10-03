# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js application (skip linting and type checking)
ENV SKIP_ENV_VALIDATION=true
RUN pnpm run build || pnpm next build

# Production stage
FROM node:20-alpine AS production

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile && pnpm store prune

# Copy built application from builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

# Copy next.config if exists (optional)
COPY --from=builder /usr/src/app/next.config.* ./

# Expose port
EXPOSE 3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /usr/src/app

USER nextjs

# Start the Next.js server
CMD ["pnpm", "start"]