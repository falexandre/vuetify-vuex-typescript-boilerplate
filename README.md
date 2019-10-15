# vuetify-vuex-typescript-boilerplate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### URL backend
```
src/plugins/axios.ts

const Request = axios.create({
		baseURL: <URL_BACKEND>,
		validateStatus: (status: number) => {
				return status >= 200 && status < 300;
		},
});

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
