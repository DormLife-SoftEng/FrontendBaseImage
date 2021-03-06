# pull official base image
FROM node:14.12.0-alpine3.12 as development

ENV NODE_ENV=development

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# RUN npm install react-scripts@3.4.3 -g --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]
