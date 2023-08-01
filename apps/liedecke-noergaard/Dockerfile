###############################
# BUILD FOR LOCAL DEVELOPMENT #
###############################

FROM node:18-alpine AS development

RUN npm i -g npm@latest

RUN mkdir -p /workspace/apps/liedecke-noergaard

RUN mkdir -p /workspace/packages

RUN mkdir -p /workspace/config

COPY ./apps/liedecke-noergaard/package*.json /workspace/apps

COPY ./packages /workspace/packages

COPY ./config /workspace/config

WORKDIR /workspace/apps/liedecke-noergaard

RUN npm install

COPY ./apps/liedecke-noergaard .

USER node

########################
# BUILD FOR PRODUCTION #
########################

FROM node:18-alpine AS build

RUN npm i -g npm@latest

RUN mkdir -p /workspace/apps/liedecke-noergaard

RUN mkdir -p /workspace/packages

RUN mkdir -p /workspace/config

COPY ./packages /workspace/packages

COPY ./config /workspace/config

COPY ./tsconfig.base.json /workspace

WORKDIR /workspace/apps/liedecke-noergaard

COPY ./apps/liedecke-noergaard/package*.json ./apps/liedecke-noergaard/tsconfig*.json ./

COPY ./apps/liedecke-noergaard .

RUN npm install

RUN npm -g add next

RUN npm run build

ENV NODE_ENV production

ENV PORT 4000

RUN npm install --only=production

USER node

##############
# PRODUCTION #
##############

FROM node:18-alpine AS production

COPY --chown=node:node --from=build /workspace/website/node_modules ./node_modules

COPY --chown=node:node --from=build /workspace/website/.next ./.next

COPY ./website/package*.json ./

EXPOSE 4000

CMD ["npm", "start"]