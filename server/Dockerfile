###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN mkdir -p /workspace/server

RUN mkdir -p /workspace/packages

COPY ./server/package*.json /workspace/server

COPY ./packages /workspace/packages

WORKDIR /workspace/server

RUN npm install

COPY ./server .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN mkdir -p /workspace/server

RUN mkdir -p /workspace/packages

COPY ./packages /workspace/packages

COPY ./tsconfig.base.json /workspace

WORKDIR /workspace/server

COPY ./server/package*.json ./server/tsconfig*.json ./

RUN npm install

RUN npm install -g @nestjs/cli

COPY ./server .

RUN npm run build

ENV NODE_ENV production

ENV PORT 8080

RUN npm install only=production

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /workspace/server/node_modules ./node_modules

COPY --chown=node:node --from=build /workspace/server/dist ./dist

EXPOSE 8080

CMD ["node", "dist/main.js"]

