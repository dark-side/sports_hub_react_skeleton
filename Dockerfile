# This Dockerfile is used to build a Docker image for a Node.js application.
# It sets the base image to the latest version of Node.js, creates a working directory,
# copies the package.json file, installs the dependencies using yarn, and exposes port 8080.
# Finally, it sets the command to start the application using yarn.

FROM node:latest

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 3000
ENV PORT 3000

CMD [ "yarn", "start" ]