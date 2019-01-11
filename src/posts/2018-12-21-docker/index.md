---
path: "/docker"
title: "Dockerizing a Gatsby Static Site Deployment"
date: "2018-12-21"
featuredImage: "./docker.png"
---

## Dockerfile

Below you can find my source for the dockerization of this website.

```docker{numberLines: true}
# Stage 1, Build and compile the site
# Pull the latest node js image
FROM node:latest as build-stage
# Set a working directory
WORKDIR /app
# Copy the node dependenices needed to compile the website
COPY package*.json /app/
# Install the Gatsby Command Line Intereface
RUN npm install --global gatsby-cli
# Install the production dependencies
RUN npm install --production
# Copy the project to the pod
COPY ./ /app/
# Build the static Website
RUN gatsby build

# Stage 2, Copy compiled site for production to Nginx
# Pull the latest stable nginx image
FROM nginx:stable
# Move the completed build to the nginx Image
COPY --from=build-stage /app/public /var/www
# Copy the Nginx configuration to the nginx Image
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
# Expose port 80
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
```