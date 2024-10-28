# Start from Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all files to container
COPY . .

# Install dependencies
RUN npm install

# Build the AngularJS application
RUN npm run build

# Install http-server globally to serve files
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Serve the `dist` directory on port 8080
CMD ["http-server", "dist/user-management-ui/browser", "-p", "8080"]



