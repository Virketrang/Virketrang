###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN mkdir -p /usr/src/app/server

RUN mkdir -p /usr/src/app/packages

COPY ./projects/webshop/server/package*.json /usr/src/app/server

COPY ./projects/webshop/packages /usr/src/app/packages

WORKDIR /usr/src/app/server

RUN yarn install

COPY ./projects/webshop/server .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN mkdir -p /usr/src/app/server

RUN mkdir -p /usr/src/app/packages

COPY ./projects/webshop/packages /usr/src/app/packages

COPY ./tsconfig.base.json /usr

WORKDIR /usr/src/app/server

COPY ./projects/webshop/server/package*.json ./projects/webshop/server/tsconfig*.json ./

RUN yarn install

RUN yarn global add @nestjs/cli

COPY ./projects/webshop/server .

RUN yarn docker-build

ENV NODE_ENV production

RUN yarn install --production && yarn cache clean

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/server/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/server/build ./build

EXPOSE 8080

CMD ["node", "build/server/src/main.js"]

