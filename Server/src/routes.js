const express = require('express');
const ticketPurchase = require('./controllers/ticketPurchase');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json("Server is UP!")
});

routes.get('/ticketPurchase', ticketPurchase.index);

module.exports = routes;