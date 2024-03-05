const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Página de inicio');
});

app.get('/games', (req, res) => {
    res.send([
        {
            id: 1,
            name: "Super Mario Bros"
        },
        {
            id: 2,
            name: "Zelda"
        },
        {
            id: 3,
            name: "Metroid"
        },
        {
            id: 4,
            name: "Donkey Kong"
        },
        {
            id: 5,
            name: "Kirby"
        },
        {
            id: 6,
            name: "Star Fox"
        }
    ]);
});

module.exports = app;