FROM node:dubnium

WORKDIR /devops-final-front

COPY . .

RUN yarn install

CMD ["yarn", "serve"]