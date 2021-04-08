const express = require('express');

module.exports = {
    async index(request, response) {
        return response.json({
            hoteis: [
                {name: "Tambo del Inka", id: 1},
                {name: "Estalagem St Hubertus", id: 2},
                {name: "Al Maha", id: 3},
                {name: "Alpin Spa Tuxerhof", id: 4},
                {name: "Cocoa Island by COMO", id: 5},
                {name: "Belmond Palacio Nazarenas", id: 6},
                {name: "Four Seasons Gresham Palace", id: 7},
                {name: "Shinta Mani Club Siem Reap", id: 8},
            ]
        })
    },
}