###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN npm i -g npm@latest

RUN mkdir -p /workspace/server

RUN mkdir -p /workspace/packages

COPY --chown=node:node ./server/package*.json /workspace/server

COPY --chown=node:node ./packages /workspace/packages

WORKDIR /workspace/server

COPY --chown=node:node ./server .

RUN npm install 

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN npm i -g npm@latest

RUN mkdir -p /workspace/server

RUN mkdir -p /workspace/packages

COPY --chown=node:node ./packages /workspace/packages

COPY --chown=node:node ./tsconfig.base.json /workspace

WORKDIR /workspace/server

COPY ./server/tsconfig*.json ./

COPY --chown=node:node --from=development /workspace/server/package*.json ./

COPY ./server .

RUN npm ci

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /workspace/server/node_modules ./node_modules

COPY --chown=node:node --from=build /workspace/server/dist ./dist

EXPOSE ${PORT}

CMD ["node", "dist/server/src/main.js"]

