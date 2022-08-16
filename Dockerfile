FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm i

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

ENV PORT 5000

EXPOSE 5000

CMD [ "npm", "run", "start" ]