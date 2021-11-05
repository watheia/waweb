FROM node:alpine as build

WORKDIR /workspace
ADD . .

RUN yarn && \
  yarn nx run web:build:production


FROM node:alpine

WORKDIR /app
COPY --from=build /workspace/dist/apps/web /app
RUN yarn install && yarn next build

CMD ["yarn", "start"]