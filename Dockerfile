FROM node:6
COPY ./server /server
WORKDIR /server
RUN npm install
ADD ./dist /server/dist
EXPOSE 3000
CMD nodejs /server/server.js
