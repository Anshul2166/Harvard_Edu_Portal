FROM node:10.3-alpine
COPY . .
RUN npm run docker
RUN npm install -g serve
CMD serve -s build
EXPOSE 3000
EXPOSE 8080
