# Étape de build
FROM node:18 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape production
FROM node:18-alpine
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/package*.json ./
EXPOSE 3000
CMD ["node", "dist/main.js"]
