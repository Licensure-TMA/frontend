# Шаг 1: Сборка React-приложения
FROM node:16-alpine AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json из папки licensure-app в рабочую директорию
COPY licensure-app/package*.json ./

# Установка зависимостей
RUN npm ci --only=production

# Копируем все остальные файлы проекта из папки licensure-app в рабочую директорию
COPY licensure-app/ ./

# Собираем React-приложение
RUN npm run build

# Шаг 2: Запуск собранного приложения с помощью Nginx
FROM nginx:alpine

# Копируем собранные файлы из /app/build контейнера сборки в директорию, где nginx будет раздавать статические файлы
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем 80 порт для HTTP трафика
EXPOSE 80

# Запускаем Nginx в фоновом режиме
CMD ["nginx", "-g", "daemon off;"]
