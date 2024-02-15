Создание нового приложения используя create-react-app-----------------------
Документация:
https://ru.legacy.reactjs.org/docs/create-a-new-react-app.html

Установка:
npx create-react-app . —template typescript
npm start


Создание нового приложения используя Vite-----------------------
***Документация:
https://vitejs.dev/guide/

Установка:
npm create vite@latest . —template react-ts
npm i
npm run dev


Установка библиотеки для работы с scss:
npm add -D sass


Установка библиотеки для работы с svg:
Документация:
https://www.npmjs.com/package/vite-plugin-svgr

Установка:
npm install vite-plugin-svgr


Установка библиотеки для работы с axios:
Документация:
https://habr.com/ru/articles/521902/

Установка:
npm i axios


Install Material UI, the world's most popular React UI framework.
https://mui.com/material-ui/getting-started/installation/

Установка:
npm install @mui/material @emotion/react @emotion/styled


Установка React Router DOM:
https://rajdee.gitbooks.io/redux-in-russian/content/docs/advanced/UsageWithReactRouter.html

Установка:
npm install --save react-router-dom

npm install @types/node


Деплой на gh-pages
npm install gh-pages --save-dev

в файле vite.config.ts добавить:
  base: '/my-space-project', <<< название репозитория

в файле package.json добавить:
{
  "name": "teachmeskillsfe54",
  "private": true,
  "homepage": "https://arti876.github.io/my-space-project", <<<
}
    "scripts": {
    "predeploy": "npm run build", <<<
    "deploy": "gh-pages -d dist", <<<
    }

npm run predeploy
npm run deploy


Отменить проверку ts в файле:
// @ts-nocheck


Подключение Redux Toolkit к React
npm install @reduxjs/toolkit react-redux


Создание фейкового REST API с помощью json-server
https://code.tutsplus.com/ru/fake-rest-api-up-and-running-using-json-server--cms-27871t

устанавилваем пакет:
npm install -g json-server

создаем файл в с даными db.json

запускаем сервер
json-server db.json

берем полученный api и работаем с ним
http://localhost:3000/posts


useClickAway
Detect clicks outside of specific component with useClickAway.

npm i @uidotdev/usehooks


Как сделать модальное окно react
https://ru.hexlet.io/qna/javascript/questions/kak-sdelat-modalnoe-okno-react
https://www.npmjs.com/package/@types/react-modal
https://reactcommunity.org/react-modal/

устанавилваем пакет:
npm install react-modal
npm install --save @types/react-modal

import Modal from 'react-modal';

BautttonTransition.defaultProps = {
  className: null,
};


MUI
https://mui.com/material-ui/getting-started/installation/

npm install @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components @fontsource/roboto @mui/icons-material


// с большой кроме первой удалить пробелы 'first name'.replace(/(^s|\s)\S/g, function(a) {return a.toUpperCase()}).replaceAll(' ', '')
// с большой все 'first name'.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// тире 'first name'.replace(/(\s?-\s?)|\s/g, '-')

