###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN npm i -g npm@latest

RUN mkdir -p /workspace/website

RUN mkdir -p /workspace/packages

COPY ./website/package*.json /workspace/website

COPY ./packages /workspace/packages

WORKDIR /workspace/website

RUN npm install

COPY ./website .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN npm i -g npm@latest

RUN mkdir -p /workspace/website

RUN mkdir -p /workspace/packages

COPY ./packages /workspace/packages

COPY ./tsconfig.base.json /workspace

WORKDIR /workspace/website

COPY ./website/package*.json ./website/tsconfig*.json ./

COPY ./website .

RUN npm install

RUN npm -g add next

RUN npm run build

ENV NODE_ENV production

ENV PORT 3000

RUN npm install --only=production

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /workspace/website/node_modules ./node_modules

COPY --chown=node:node --from=build /workspace/website/.next ./.next

COPY ./website/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]