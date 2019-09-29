FROM node:12.10-alpine
WORKDIR /app
ADD . /app/
# Linux alpine does not contain by default SSL certificates
# we need to install them
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apl/*
RUN npm install --production

RUN rm -rf ./config/local.json
RUN rm -rf ./docker-compose.override.yml

CMD ["npm","start"]
