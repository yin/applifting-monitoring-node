FROM node:12.12-alpine

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "watch"]
