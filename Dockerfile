# Use a Node.js 20 LTS image as the base
FROM node:20-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
FROM base AS dependencies
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Build the Next.js application
FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

# Production stage: Run the application
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment variables for Next.js production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Don't run production as root
# Create a non-root user for security best practices
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from the builder stage
# Automatically leverage output traces to reduce image size (Next.js standalone output)
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Switch to non-root user
USER nextjs

# Expose the port Next.js runs on
EXPOSE 3000

# Set the hostname to listen on all interfaces
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Command to run the application
# Next.js standalone output creates a server.js in the .next/standalone directory
CMD ["node", "server.js"]
