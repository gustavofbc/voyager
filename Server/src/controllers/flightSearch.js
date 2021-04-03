const express = require('express');

module.exports = {
    async find(request, response) {

        const search = String(request.query.search);

        const filteredFlights = search ? flights.filter(fly => fly.flight.includes(search)) : flights;

        // console.log(filteredFlights)
        return response.json(filteredFlights);

    }
}

const flights = [
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        schedule: "12:00",
        Value: 300,
    },
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        schedule: "17:00",
        Value: 300,
    },
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        schedule: "29:00",
        Value: 300,
    },
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        schedule: "22:00",
        Value: 300
    },
    {
        flight: "1x3",
        origin: "Marabá",
        destiny: "Ipixuna",
        schedule: "12:00",
        Value: 300
    },
    {
        flight: "1x4",
        origin: "Marabá",
        destiny: "Parauapebas",
        schedule: "12:00",
        Value: 300
    },
    {
        flight: "2x1",
        origin: "Belém",
        destiny: "Marabá",
        schedule: "14:00",
        Value: 300
    },
    {
        flight: "2x3",
        origin: "Belém",
        destiny: "Ipixuna",
        schedule: "14:00",
        Value: 300
    },
    {
        flight: "2x4",
        origin: "Belém",
        destiny: "Parauapebas",
        schedule: "14:00",
        Value: 300
    },
    {
        flight: "3x1",
        origin: "Ipixuna",
        destiny: "Marabá",
        schedule: "14:00",
        Value: 300
    },
    {
        flight: "3x2",
        origin: "Ipixuna",
        destiny: "Belém",
        schedule: "14:00",
        Value: 300
    },
    {
        flight: "3x4",
        origin: "Ipixuna",
        destiny: "Parauapebas",
        schedule: "14:00",
        Value: 300
    },
    {
        flight: "4x1",
        origin: "Parauapebas",
        destiny: "Marabá",
        schedule: "15:00",
        Value: 300
    },
    {
        flight: "4x2",
        origin: "Parauapebas",
        destiny: "Belém",
        schedule: "15:00",
        Value: 300
    },
    {
        flight: "4x3",
        origin: "Parauapebas",
        destiny: "Ipixuna",
        schedule: "15:00",
        Value: 300
    },

]