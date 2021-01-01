FROM node:14.15.3

WORKDIR /project

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npx", "next", "start" ]