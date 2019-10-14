FROM node:11.15

WORKDIR /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "watch"]
