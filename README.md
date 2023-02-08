# MyApp

## NPM Scripts

```
// Angular-Cli
"ng": "ng"

// webpack 打包成靜態文檔
"build": "ng build",

// 在 watch 模式下打包成靜態檔
"watch": "ng build --watch --configuration development",

// Angular Unit Test
"test": "ng test",

// Angular ESLint
"lint": "ng lint",

// 啟動假資料系統 json server
"mock": "json-server ./_mockserver/_db.js -c _mockserver/config.json",

// Angular 自動產生註解網站 watch 模式下
"compodoc-w": "compodoc -s -w",
```

## Code scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
