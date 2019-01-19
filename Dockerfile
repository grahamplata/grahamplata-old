# Stage 1, Build and compile the site
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --global gatsby-cli
RUN npm install --production
COPY ./ /app/
RUN gatsby build

# Stage 2, Copy compiled site for production to Nginx
FROM nginx:stable
COPY --from=build-stage /app/public /var/www
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
