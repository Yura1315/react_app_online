В рамках проекта была разработана клиентская часть интернет-магазина дизайнерской посуды и декора.
Работа производилась по трем направлениям:

1. Дизайн
В основе стилистического решения лежит стиль минимализм. Цветовое решение - спокойные приглушенные тона. Такая гамма позволяет клиенту использовать сайт более продолжительное время, в отличие от сайтов с яркими насыщенными цветами.

2. Серверная часть
Серверная часть построенна на Node.js с использованием фреймворка Hapi.js. + , база данных Mongodb
Более подробно с серверной частью можно ознакомиться по ссылке - https://github.com/Yura1315/server_online_shop

3. Клиентская часть
Клиентская часть постороена с использованием библиотеки React, в качестве хранилища используется Redux так же подключен Redax-persist, для асинхронных операций Redux-thunk, для навигации React-router-dom, в качестве стилей выбраны модульные стили.

Страницы приложения: 1. Главная, 2. Каталог, 3. Корзина, 4. Авторизация, регистрация, 5. Личный кабинет, 6. 404 not found, добавить функционал личного кабинета для гостя, исправить существующие проблемы:)

Функционал приложения:
Неавторизованный пользователь имеет доступ ко всем страницам, кроме личного кабинета. Также может добавлять, изменять количество или удалять товар в корзине. При авторизации или регистрации пользователя добавленные им ранее товары в корзину объединяются с корзиной, пришедшей с сервера.
Авторизованный пользователь имеет доступ к личному кабинету, где он может изменить свои данные, также может посмотреть список избранных товаров.


Приложение пока не полное, в будущем планируется добавить страницы "Контакты", "О нас" "Оформление заказа". Также будет расширен круг пользователй, будет добавлен Администратор, которые будет иметь возможность: 1. Добавлять новые товары, 2. Удалять товары, 3. Просматривать и изменять статус заказов.

Сайт доступен по ссылке - http://31.184.253.118:8080/
