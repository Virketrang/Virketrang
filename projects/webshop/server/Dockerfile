# BASE IMAGE
FROM node:alpine

# CREATE APP DIRECTORY
WORKDIR /usr/src/app

# COPY package.json
COPY package*.json ./

# INSTALL DEPENDENCIES
RUN npm install

# BUNDLE APP SOURCE
COPY . .

# BUILD SERVER
RUN npm run build

# EXPOSE PORT
EXPOSE 8080

# START SERVER
CMD ["node", "build/main.js"]