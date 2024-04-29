# Шаг 1: Сборка React-приложения
FROM node:18-alpine AS build

WORKDIR /app

# Копируем файлы package.json и package-lock.json из папки licensure-app в рабочую директорию
COPY licensure-app/package*.json ./

# Установка всех зависимостей, включая devDependencies
RUN npm ci

# Копируем все остальные файлы проекта из папки licensure-app в рабочую директорию
COPY licensure-app/ ./

# Собираем React-приложение
RUN npm run build

# Шаг 2: Запуск собранного приложения с помощью Nginx
FROM nginx:alpine

# Копируем собранные файлы из /app/dist контейнера сборки в директорию, где nginx будет раздавать статические файлы
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
