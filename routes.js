const express = require('express');
const route = express.Route();
const homeController = require('./src/controllers/homeController');




route.get('/', homeController.index);
/*
route.get('/', (req, res)=>{
    res.send(`<h1>Olá Mundo</h1>`);
});
*/

module.exports = route;