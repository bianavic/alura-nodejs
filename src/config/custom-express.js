require('marko/node-require').install();
require('marko/express');

const express = require('express');
app = express()

const rotas = require('../app/rotas')
rotas(app);

module.exports = app;
