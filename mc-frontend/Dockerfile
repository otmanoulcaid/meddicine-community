FROM node:22-alpine

WORKDIR /app

COPY app/ .

RUN npm i

ENTRYPOINT [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
