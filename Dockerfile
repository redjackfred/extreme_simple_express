FROM node:18-apline AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY app.js .

EXPOSE 3000

CMD [ "node", "app.js" ]
