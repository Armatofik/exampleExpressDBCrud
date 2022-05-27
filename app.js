const express = require('express');
const logger = require('morgan');
const {environment, port} = require('./config/app');

const setRole = require('./middlewares/setRole');
const injectDB = require('./middlewares/injectDB');
const injectModels = require('./middlewares/injectModels');

const tableRouter = require('./routers/tableRouter')

express()
  .use(logger(environment))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(setRole)
  .use(injectDB)
  .use(injectModels)
  .use('/api', tableRouter)
  .listen(port);
