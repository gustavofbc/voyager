const express = require('express');

module.exports = {
    async index(request, response) {
        return response.json({
            hoteis: [
                "Tambo del Inka",
                "Estalagem St Hubertus",
                "Al Maha",
                "Alpin Spa Tuxerhof",
                "Cocoa Island by COMO",
                "Belmond Palacio Nazarenas",
                "Four Seasons Gresham Palace",
                "Shinta Mani Club Siem Reap",
            ]
        })
    },
}