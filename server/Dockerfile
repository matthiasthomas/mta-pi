FROM node:9.6.1
# set working directory
RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
# start server
CMD ["node", "server.js"]