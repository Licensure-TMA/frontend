# Шаг 1: Сборка React-приложения
FROM node:16-alpine AS build

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Установим зависимости проекта
RUN npm ci --only=production

# Копируем остальные файлы проекта
COPY . .

# Собираем React-приложение
RUN npm run build

# Шаг 2: Запуск собранного приложения с помощью Nginx
FROM nginx:alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]