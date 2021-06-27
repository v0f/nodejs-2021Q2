# RS School REST service

## Запустить приложение можно 2 способами:

### 1. БД в докере, node локально
запуск базы:
```
docker-compose up
```
запуск приложения:
```
npm install
npm start
```
запуск тестов:
```
npm run test:auth
```
### 2. всё в докере
```
docker-compose --profile nodeInDocker up
```
запуск тестов:
```
docker-compose exec node-app npm run test:auth
```

### Миграции
запускаются автоматически при старте приложения

запуск миграций вручную:
```
npm run migration
```
генерация миграций:
```
npm run migration:gen -- -n init
```
