FROM mhart/alpine-node:8.9

RUN apk update \
    && npm install yarn mocha -g

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "start"]
