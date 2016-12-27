FROM node:6.9.1

RUN npm install webpack -g

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

RUN webpack

ENV NODE_ENV=production
ENV PORT=4000

CMD [ "/usr/local/bin/node", "client.js" ]

EXPOSE 4000