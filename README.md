# Конфиги для webpack

## Введение

webpack решает множество проблем связанных со сборкой больших проектов, созданием бандлов, упрощением интеграции сторонних библиотек в код, обработки кода для совместимости со старыми браузерами, автоматической обработки файлов при загрузке в приложение и многое другое.

Прежде всего необходимо установить nodejs, а затем и webpack глобавльно или локально для конкретного проекта

Установка nodejs детально описана здесь:

https://github.com/easy-linux/node-install

**Я настоятельно рекомендую устанавливать nodejs с помощью nvm. Это современный и очень удобный способ, которй избавит Вас от многих проблем в будущем.

Глобальная установка webpack:

    npm install -g webpack
    npm install -g webpack-cli

Локальная установка webpack для какого-то проекта тривиальна. В каталоге проекта, созданного при помощи npm init выполняем команды:

    
    npm install webpack -D
    npm install webpack-cli -D

Теперь находясь в каталоге проекта выполните команду:

    webpack --version

Отобразится что-то похожее на:

    webpack 5.11.1
    webpack-cli 4.3.1

## Простейший конфиг

    const webpack = require('webpack');
    
    module.exports = {
      mode: 'development',
      entry: './main.js',
      output: {
        path: __dirname,
        filename: 'bundle.js'
      },
    };

Важно здесь следующее - главный файл приложения находится в корне проекта и имеет имя main.js. 

Результатом работы webpack будет файл bundle.js и находиться он будет тоже в корне каталога проекта. Больше никаких опций, настроек, конфигураций тут нет. 

Создайте в корне проекта файл webpack.config.js и вставьте в него вышеуказанный код. 

Запуск процедуры сборки прокта:

    webpack -c ./webpack.config.js

Обратите внимание в нашем конфиге используется опция mode. Она может принимать два значения development или production для создания тестовой и промышленной версии соответственно. 

## Ссылки
Простой проект с минимальным webpack конфигом

https://github.com/easy-linux/webpack-configs/tree/main/examples/example1

[![Видео здесь](https://img.youtube.com/vi/unEl3Hezwpw/0.jpg)](https://www.youtube.com/watch?v=unEl3Hezwpw)

Настройка горячей перезагрузки

https://github.com/easy-linux/webpack-configs/tree/main/examples/example2

[![Видео здесь](https://img.youtube.com/vi/oOpzkF2nU0s/0.jpg)](https://www.youtube.com/watch?v=oOpzkF2nU0s)

Настройка загрузки css/scss файлов и файлов изображений

https://github.com/easy-linux/webpack-configs/tree/main/examples/example3

[![Видео здесь](https://img.youtube.com/vi/3B-NGZmMe-Y/0.jpg)](https://www.youtube.com/watch?v=3B-NGZmMe-Y)

Модульный принцип конфигурации проекта:

[![Видео здесь](https://img.youtube.com/vi/fnUqyWyG5kk/0.jpg)](https://www.youtube.com/watch?v=fnUqyWyG5kk)


## Видео по vitejs

[![Видео здесь](https://img.youtube.com/vi/wIEauCguZGI/0.jpg)](https://www.youtube.com/watch?v=wIEauCguZGI)
[![Видео здесь](https://img.youtube.com/vi/t98Q9hliZZo/0.jpg)](https://www.youtube.com/watch?v=t98Q9hliZZo)
[![Видео здесь](https://img.youtube.com/vi/aMzCDR_MHF0/0.jpg)](https://www.youtube.com/watch?v=aMzCDR_MHF0)
[![Видео здесь](https://img.youtube.com/vi/TZN6dC7ZOs0/0.jpg)](https://www.youtube.com/watch?v=TZN6dC7ZOs0)





