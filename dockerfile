FROM node:10

WORKDIR /root

COPY . .

RUN yarn install

CMD node index

EXPOSE 80
EXPOSE 443