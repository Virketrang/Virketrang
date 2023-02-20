###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN mkdir -p /usr/src/app/client/desktop/frontend

RUN mkdir -p /usr/src/app/packages

COPY ./projects/webshop/client/desktop/frontend/package*.json /usr/src/app/client/desktop/frontend

COPY ./projects/webshop/packages /usr/src/app/packages

WORKDIR /usr/src/app/client/desktop/frontend

RUN yarn install

COPY ./projects/webshop/client/desktop/frontend .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN mkdir -p /usr/src/app/client/desktop/frontend

RUN mkdir -p /usr/src/app/packages

COPY ./projects/webshop/packages /usr/src/app/packages

COPY ./tsconfig.base.json /usr

COPY ./tsconfig.angular.json /usr

WORKDIR /usr/src/app/client/desktop/frontend

COPY ./projects/webshop/client/desktop/frontend/package*.json ./projects/webshop/client/desktop/frontend/tsconfig*.json ./

RUN yarn install

RUN yarn global add @angular/cli@15.1.5

COPY ./projects/webshop/client/desktop/frontend .

RUN yarn run build

ENV NODE_ENV production

ENV PORT 8080

RUN yarn install --production && yarn cache clean

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/client/desktop/frontend/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/client/desktop/frontend/dist ./dist

EXPOSE 8080

CMD ["yarn", "run", "start"]


