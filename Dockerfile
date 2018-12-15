FROM node:alpine

COPY . /data
WORKDIR /data

RUN yarn

CMD yarn run dev
