const express = require('express');

module.exports = {
    async index(request, response) {
        return response.json({
            cidade:[
                "Marabá",
                "Belém",
                "Ipixuna",
                "Parauapebas",
                "São João",
                "São Domingos",
                "Apinajés",
                "Curionópolis",
            ]
        })
    },
}