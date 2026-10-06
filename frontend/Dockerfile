# Multi-stage Dockerfile for Frontend

# Stage 1: Build the React/Vite SPA
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency specifications
COPY package*.json ./

# Install npm dependencies
RUN npm ci || npm install

# Copy source code and configurations
COPY . .

# Build production assets
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
