# Домашка для Сбера

## Страница деплоится на gh pages

Чтобы не поднимать у себя ничего, деплой на gh pages:

https://skavem.github.io/sber-homework/

[Пайплайн на деплой](/.github/workflows/deploy.yml)

## Запуск

Можно запустить контейнером:

```
docker build -t react-food-app .
docker run --name react-food-app -dp 4242:80 react-food-app
```

Но в целом ради экономии времени можно сделать:

```
nvm use $(Get-Content .nvmrc) // на винде
nvm use // на Linux
npm ci
npm run start
```

## Предисловие

Старался писать код понятным, но [один файл все же требует пояснений](/src/store/food/foodApi.ts). Таким "сложным" он сделан специально, чтобы создать условия, приближенные к боевым - когда есть некоторый бэк, с которого стягиваются данные. 

Причем часто стягиваются также и категории. Но, например, временнАя сортировка лежит уже в [foodReducer](./src/store/food/foodReducer.ts), чтобы показать возможность и клиентских сортировок/фильтраций.

## Почистить докер

```
docker stop react-food-app
docker rm react-food-app
docker rmi react-food-app
```