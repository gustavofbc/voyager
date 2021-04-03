const express = require('express');

module.exports = {
    async index(request, response) {
        return response.json({
            cidade:[
                {name: "Marabá", id: 1},
                {name: "Belém", id: 2},
                {name: "Ipixuna", id: 3},
                {name: "Parauapebas", id: 4},
            ]
        })
    },
}