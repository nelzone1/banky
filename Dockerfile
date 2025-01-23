# Use official Node.js image for build
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Verify if the dependency is installed (this should print the react-router-dom version)
RUN npm list react-router-dom

# Build the React app
RUN npm run build

# Use Nginx as a lightweight production server
FROM nginx:alpine

# Copy the build files from the build stage to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
