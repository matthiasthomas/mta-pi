FROM node:9.6.1
# set working directory
RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g @angular/cli
# start app
CMD ng serve --host 0.0.0.0