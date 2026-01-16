FROM node:20.19.0

WORKDIR /home/app

COPY package*.json ./
COPY prisma.config.ts ./


RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "start"]