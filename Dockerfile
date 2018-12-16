FROM node:alpine

COPY package.json /data/package.json
COPY gulpfile.js /data/gulpfile.js
COPY tsconfig.json /data/tsconfig.json
COPY /src /data/src

WORKDIR /data

RUN yarn

CMD yarn run dev
