


# Start with a base Node.JS image
FROM node:20-slim

# Set the Directory for the Bot to be /app inside the container
WORKDIR /app

# Copy the package.json files for dependancies
COPY package*.json ./

# Install the dependancies before the final build process to reduce build time
RUN npm install

#Set the discord bot token.
ENV token="PLACEHOLDER" clientId="PLACEHOLDER" botOwnerId="PLACEHOLDER"

# Copy source code into the container
COPY . .

# Start  the app
CMD [ "npm", "start"]