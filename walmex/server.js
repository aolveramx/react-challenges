'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');

// server config
const port = process.env.PORT || 5000;

// register routes
registerRoutes(app);

// Static files
app.use(express.static(__dirname + '/client/public'))

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

const main = async () => {
    await start();
    return;
};

main();