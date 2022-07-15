# Dockerfile

# base image
FROM node:12

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# copy source files
COPY . /usr/src

RUN npm cache clean --force
RUN npm install
RUN ./node_modules/.bin/pm2 install typescript
# If you are building your code for production
# RUN npm ci --only=production
EXPOSE 9000
RUN ./node_modules/.bin/pm2 start ./package/app.ts --max-memory-restart 300M --watch    
CMD npm start