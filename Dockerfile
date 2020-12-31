FROM node:current-alpine as builder

COPY package.json package-lock.json ./

RUN npm i && mkdir /angular_movies_app && cp -R ./node_modules ./angular_movies_app

WORKDIR /angular_movies_app

COPY . .

RUN $(npm bin)/ng build --prod

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 3000

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /angular_movies_app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]