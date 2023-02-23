###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN mkdir -p /usr/src/app/client/web

RUN mkdir -p /usr/src/app/packages

COPY ./projects/webshop/client/web/package*.json /usr/src/app/client/web

COPY ./projects/webshop/packages /usr/src/app/packages

WORKDIR /usr/src/app/client/web

RUN pnpm install

COPY ./projects/webshop/client/web .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN mkdir -p /usr/src/app/client/web

RUN mkdir -p /usr/src/app/packages

COPY ./projects/webshop/packages /usr/src/app/packages

COPY ./tsconfig.base.json /usr

WORKDIR /usr/src/app/client/web

COPY ./projects/webshop/client/web/package*.json ./projects/webshop/client/web/tsconfig*.json ./

RUN pnpm install

RUN pnpm -g add next

COPY ./projects/webshop/client/web .

RUN pnpm run build

ENV NODE_ENV production

ENV PORT 4000

RUN pnpm install --prod

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/client/web/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/client/web/build ./build

EXPOSE 8080

CMD ["node", "build/web/src/main.js"]