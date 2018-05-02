const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');

const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');

// You want to try from JSON directly, lazy to create json, u can try this shortcut and comment YAML part
// console.log(JSON.stringify(swaggerDocument, null, ' '));
// const swaggerDocument = require('./api/swagger/swagger.json');

let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the APIs specific to version
app.use('/api/v1', require('./api/v1'));

// Mount the SwaggerUI  middleware pipeline to host API documentation
let swaggerOptions = { explorer: false };
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

module.exports = app;