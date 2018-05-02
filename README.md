## Swagger Demo with Node.js

[![Build Status](https://travis-ci.org/rajiff/swaggerNodeJSDemo.svg?branch=master)](https://travis-ci.org/rajiff/swaggerNodeJSDemo) [![CircleCI](https://circleci.com/gh/rajiff/swaggerNodeJSDemo.svg?style=svg)](https://circleci.com/gh/rajiff/swaggerNodeJSDemo)

### Reference
- [Swagger YML reference](https://swagger.io/docs/specification/2-0/basic-structure/)
- [swagger-ui-express module](https://www.npmjs.com/package/swagger-ui-express)
- [Adding Swagger To Existing Node.js Project by Ivan Vasiljevic](https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b)

### How to build and run this project

#### Install dependencies (you can do both using npm, yarn)
```shell
yarn
```
or

```shell
npm install
```

#### Run the APIs
```shell
yarn start
```

Once app is running, you can view the API doc using URL `http://localhost:3000/api/v1/docs`, this will be read only doc but you can tryout the APIs

#### Edit or Design API document interactively
```shell
yarn api-edit
```

#### Run for API tests using swagger
```shell
yarn api-test
```