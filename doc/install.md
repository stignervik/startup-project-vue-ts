# Setup Application

Use the Vite framework tool to create the Vue application.

```
$ yarn create vite . --template vue-ts
```

Add Vuetify as material design framework

```
$ vue add vuetify
```

During installation of Vuetify select the following:

> Vuetify 3 - Vite (preview)

Add frontend packages

```
$ yarn add axios
$ yarn add pinia
$ yarn add sass
$ yarn add vue-router
$ yarn add --dev @vitejs/plugin-vue
$ yarn add --dev vite-plugin-vuetify
$ yarn add @mdi/font
$ yarn add @soerenmartius/vue3-clipboard
```

Prettier and ESLint

```
$ yarn add --dev --exact prettier
$ yarn add eslint eslint-plugin-vue
```

For Vue and TypeScript we use Prettier. This can also be configured in VSCode run when saving file.

```
$ npx prettier --write .
```

Lodash

```
$ yarn add lodash
$ yarn add --dev @types/lodash
```
