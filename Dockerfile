FROM node:14-alpine as base-node

WORKDIR /app

FROM base-node as dev
RUN chown -R node:node /app
USER node
COPY --chown=node:node package.json /app
COPY --chown=node:node package-lock.json /app
RUN npm install
COPY . /app

RUN npm run test

RUN npm run build

USER node

FROM dev AS pre-prod
RUN npm prune --production

FROM base-node AS prod
COPY --from=pre-prod --chown=node:node /app/node_modules /app/node_modules
COPY --from=pre-prod --chown=node:node /app/package.json /app/
COPY --from=pre-prod --chown=node:node /app/dist /app/dist
USER node

ENTRYPOINT ["node", "/app/dist/main.js"]
