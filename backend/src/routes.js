const { Router } = require('express');
const axios = require('axios');

const DevController = require('./controllers/DevController');

const routes = Router();

routes.post('/devs', DevController.store);

module.exports = routes;