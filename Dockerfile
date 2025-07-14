# Use a Node.js 20 LTS image as the base
FROM node:20-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
FROM base AS dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --frozen-lockfile

# Build the Next.js application
FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production stage: Run the application
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment variables for Next.js production
ENV NODE_ENV production

# Copy necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
