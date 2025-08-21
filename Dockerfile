# -------------------------
# Étape 1 : Build Angular
# -------------------------
FROM node:18-alpine AS build

WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances en ignorant les conflits peer-deps
RUN npm install --legacy-peer-deps

# Copier tout le code source pour le build
COPY . .

# Build production Angular
RUN npm run build --prod

# -------------------------
# Étape 2 : Nginx léger
# -------------------------
FROM nginx:alpine

# Copier les fichiers buildés
COPY --from=build /app/dist/Frontend /usr/share/nginx/html

# Configuration minimale Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie env.js
COPY ./src/assets/env.js /usr/share/nginx/html/assets/env.js

# Entrypoint pour injection runtime des variables d'environnement
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]





# FROM node:16

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 8080
# CMD [ "node", "server.js" ]