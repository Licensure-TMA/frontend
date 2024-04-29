#!/bin/bash

# Остановить и удалить старый контейнер, если он существует
docker stop front || true
docker rm front || true

# Удалить старый образ
docker rmi aleksglebov/licensure:front || true

# Получить последнюю версию образа из Docker Hub
docker pull aleksglebov/licensure:front

# Запустить новый контейнер
docker run -p 80:80 -d --name front aleksglebov/licensure:front

echo "Deployment completed successfully."