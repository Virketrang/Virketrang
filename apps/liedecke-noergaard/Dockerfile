###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN mkdir -p /usr/src/app/webshop

RUN mkdir -p /usr/packages

COPY ./apps/webshop/package*.json /usr/src/app/webshop

COPY ./packages /usr/packages

WORKDIR /usr/src/app/webshop

RUN pnpm install

COPY ./apps/webshop .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN mkdir -p /usr/src/app/webshop

RUN mkdir -p /usr/packages

COPY ./packages /usr/packages

COPY ./tsconfig.base.json /usr

WORKDIR /usr/src/app/webshop

COPY ./apps/webshop/package*.json ./apps/webshop/tsconfig*.json ./

RUN pnpm install

RUN pnpm -g add next

COPY ./apps/webshop .

RUN pnpm run build

ENV NODE_ENV production

ENV PORT 4000

RUN pnpm install --prod

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /usr/src/app/webshop/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/webshop/build ./build

EXPOSE 8080

CMD ["node", "build/web/src/main.js"]