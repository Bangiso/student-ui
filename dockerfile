
FROM node:14.17.5 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/dist/student-ui /usr/share/nginx/html