
FROM node:20.19.0


WORKDIR /home/app


RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app


COPY --chown=node:node package*.json ./


USER node


RUN npm install



COPY --chown=node:node . .


CMD ["npm", "start"]# Usa versão suportada pelo Prisma
FROM node:20.19.0


WORKDIR /home/app


RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app


COPY --chown=node:node package*.json ./


USER node


RUN npm install



COPY --chown=node:node . .


CMD ["npm", "start"]