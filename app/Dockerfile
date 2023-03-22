# This file serves as a template for the Dockerfile that will be used to build the Docker image for the application.

# Base image
FROM node:14-alpine as base

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the React client application
RUN npm run build

# Production image
FROM node:14-alpine

# Install necessary dependencies
RUN apk add --no-cache bash

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Create and set the working directory
WORKDIR /app

# Copy only necessary files from the base image
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules

# Copy the built client application to the container
COPY --from=base /app/build ./public

# Expose the port
EXPOSE $PORT

# Start the server
CMD ["npm", "start"]
