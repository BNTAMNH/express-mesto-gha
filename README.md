[![Tests](https://github.com/BNTAMNH/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/BNTAMNH/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд
В этом проекте была начата работа над бэкендом для проекта Место. 
Проект доступен по ссылке: https://github.com/BNTAMNH/express-mesto-gha

# Технологии
* Express.js
* Node.js
* Mongoose
* MongoDB


## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

## Чек-лист по 14 работе: 

~~1. Добавьте email и password к схеме пользователя~~
~~2. Доработайте контроллер createUser~~
~~3. Создайте контроллер login~~
~~4. Создайте роут для логина и регистрации~~
5. Сделайте мидлвэр для авторизации
6. Создайте контроллер и роут для получения информации о пользователе
7. Защитите API авторизацией
8. Удалите хардкод
9. Проконтролируйте права
10. Сделайте так, чтобы API не возвращал хеш пароля
### Последние штрихи
1. Реализуйте централизованную обработку ошибок
2. Валидируйте приходящие на сервер запросы
3. Валидируйте данные на уровне схемы
4. Пройти тесты Github Actions
