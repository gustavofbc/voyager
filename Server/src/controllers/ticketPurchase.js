const express = require('express');

module.exports = {
    async index(request, response) {
        return response.json({
            cidade:{
                "Marabá": 1,
                "Belém": 2,
                "Ipixuna": 3,
                "Parauapebas": 4,
            }
        })
    },
}