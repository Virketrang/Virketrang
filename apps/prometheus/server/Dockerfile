###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN mkdir -p /usr/src/app/server

RUN mkdir -p /usr/packages

COPY ./apps/cms/server/package*.json /usr/src/app/server

COPY ./packages /usr/packages

WORKDIR /usr/src/app/server

RUN yarn install

COPY ./apps/cms/server .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN mkdir -p /usr/src/app/server

RUN mkdir -p /usr/packages

COPY ./packages /usr/packages

COPY ./tsconfig.base.json /usr

WORKDIR /usr/src/app/server

COPY ./apps/cms/server/package*.json ./apps/cms/server/tsconfig*.json ./

RUN yarn install

RUN yarn global add @nestjs/cli

COPY ./apps/cms/server .

RUN yarn docker-build

ENV NODE_ENV production

ENV PORT 8080

RUN yarn install --production && yarn cache clean

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/server/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/server/build ./build

EXPOSE 8080

CMD ["node", "build/main.js"]

