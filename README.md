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

### Результаты load testing

#### Express
|              |                                  |                                 |
|--------------|----------------------------------|---------------------------------|
| Requests     | [total, rate, throughput]        | 2855, 2855, 2855                |
| Duration     | [min, max, median]               | 1.5, 52.9, 2.6                  |
| Latencies    | [min, max, median, 95, 99]       | 0µs, 52µs, 1µs, 3µs, 6µs        |
| Success      | [ratio]                          | 100.00%                         |
| Status Codes | [code:count]                     | 200:2855                        |

#### Fastify
|              |                                  |                                 |
|--------------|----------------------------------|---------------------------------|
| Requests     | [total, rate, throughput]        | 2872, 2872, 2872                |
| Duration     | [min, max, median]               | 1.3, 23, 2.1                    |
| Latencies    | [min, max, median, 95, 99]       | 0µs, 22µs, 1µs, 2µs, 4µs        |
| Success      | [ratio]                          | 100.00%                         |
| Status Codes | [code:count]                     | 200:2872                        |