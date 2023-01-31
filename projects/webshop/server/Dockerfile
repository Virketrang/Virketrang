###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

# BASE IMAGE
FROM node:18-alpine AS development

# CREATE APP DIRECTORY
WORKDIR /usr/src/app

# COPY package.json
COPY --chown=node:node package*.json ./

# INSTALL DEPENDENCIES
RUN npm install

# BUNDLE APP SOURCE
COPY --chown=node:node . .

# USER
USER node

########################
# BUILD FOR PRODUCTION #
########################

# BASE IMAGE
FROM node:18-alpine AS build

# CREATE APP DIRECTORY
WORKDIR /usr/src/app

# COPY package.json
COPY --chown=node:node package*.json ./

# COPY node_modules
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

# BUNDLE APP SOURCE
COPY --chown=node:node . .

# BUILD SERVER
RUN npm run build

# ENVIRONMENT
ENV NODE_ENV production

# INSTALL PRODUCTION ONLY node_modules
RUN npm install --only=production && npm cache clean --force

# USER
USER node

##############
# PRODUCTION #
##############

# BASE IMAGE
FROM node:18-alpine AS production

# COPY node_modules FROM BUILD STAGE TO PRODUCTION STAGE
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules

# COPY build FROM BUILD STAGE TO PRODUCTION STAGE
COPY --chown=node:node --from=build /usr/src/app/build ./build

# EXPOSE PORT
EXPOSE 8080

# START SERVER
CMD ["node", "build/main.js"]