# Use the official Ubuntu base image
FROM ubuntu:22.04

# Set environment variables
ENV NODE_VERSION=20.11.0
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    gnupg \
    lsb-release \
    ca-certificates \
    && rm -rf "/var/lib/apt/lists/*"

# Install Node.js via NodeSource repository
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Verify Node.js and npm installation
RUN node --version && npm --version

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Create a non-root user for security
RUN useradd -m -u 1001 nextjs
RUN chown -R nextjs:nextjs /app
USER nextjs

# Start the application
CMD ["npm", "start"]
