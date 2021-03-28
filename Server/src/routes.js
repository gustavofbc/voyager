const express = require('express');
const hostingPurchase = require('./controllers/hostingPurchase');
const ticketPurchase = require('./controllers/ticketPurchase');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json("Server is UP! \n localhost:3333/ticketPurchase \n localhost:3333/hostingPurchase")
});

routes.get('/ticketPurchase', ticketPurchase.index);
routes.get('/hostingPurchase', hostingPurchase.index);

module.exports = routes;