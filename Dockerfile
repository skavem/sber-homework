FROM node:18.16.1-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
RUN npm ci

RUN npm run build

CMD ["npm", "start"]

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]