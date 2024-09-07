# Use official Node.js image
FROM node:16

# Set working directory
WORKDIR /app

# Copy the files
COPY package*.json ./
COPY server.js ./

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3002

# Start the admin service
CMD ["npm", "start"]

