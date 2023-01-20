FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api

COPY . .

RUN npm install

EXPOSE 3010

CMD ["ls"]

# CMD ["npm","run","dev"]
