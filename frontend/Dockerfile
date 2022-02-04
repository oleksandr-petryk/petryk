FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install \
    npm run build

COPY . . 
