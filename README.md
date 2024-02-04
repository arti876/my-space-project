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


Установка библиотеки для работы с React-Router:
Установка:Документация:
https://ru.hexlet.io/blog/posts/react-router-v6

Установка:
npm i react-router-dom


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
  base: '/my-space-project', <<<название репозитория

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

interface props defaultProps:

BautttonTransition.defaultProps = {
  className: null,
};

