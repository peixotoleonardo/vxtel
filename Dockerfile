FROM node:14-alpine

USER node

ENV PORT=3000

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./
COPY .env.example .env

RUN npm install

COPY --chown=node . .
RUN npm run build

EXPOSE ${PORT}

CMD [ "npm", "run", "start:prod" ]
