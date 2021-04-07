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
        departure_time: "19:00",
        arrival_time: "20:30",
        value: 300,
    },
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        departure_time: "15:00",
        arrival_time: "16:30",
        value: 300,
    },
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        departure_time: "11:00",
        arrival_time: "12:30",
        value: 300,
    },
    {
        flight: "1x2",
        origin: "Marabá",
        destiny: "Belém",
        departure_time: "08:00",
        arrival_time: "09:30",
        value: 300
    },
    {
        flight: "1x3",
        origin: "Marabá",
        destiny: "Ipixuna",
        departure_time: "15:00",
        arrival_time: "15:45",
        value: 300
    },
    {
        flight: "1x4",
        origin: "Marabá",
        destiny: "Parauapebas",
        departure_time: "17:00",
        arrival_time: "18:00",
        value: 300
    },
    {
        flight: "2x1",
        origin: "Belém",
        destiny: "Marabá",
        departure_time: "15:30",
        arrival_time: "17:00",
        value: 300
    },
    {
        flight: "2x3",
        origin: "Belém",
        destiny: "Ipixuna",
        departure_time: "12:00",
        arrival_time: "12:30",
        value: 300
    },
    {
        flight: "2x4",
        origin: "Belém",
        destiny: "Parauapebas",
        departure_time: "12:00",
        arrival_time: "12:30",
        value: 300
    },
    {
        flight: "3x1",
        origin: "Ipixuna",
        destiny: "Marabá",
        departure_time: "15:00",
        arrival_time: "15:45",
        value: 300
    },
    {
        flight: "3x2",
        origin: "Ipixuna",
        destiny: "Belém",
        departure_time: "15:00",
        arrival_time: "15:30",
        value: 300
    },
    {
        flight: "3x4",
        origin: "Ipixuna",
        destiny: "Parauapebas",
        departure_time: "16:00",
        arrival_time: "16:30",
        value: 300
    },
    {
        flight: "4x1",
        origin: "Parauapebas",
        destiny: "Marabá",
        departure_time: "20:00",
        arrival_time: "21:00",
        value: 300
    },
    {
        flight: "4x2",
        origin: "Parauapebas",
        destiny: "Belém",
        departure_time: "12:00",
        arrival_time: "12:30",
        value: 300
    },
    {
        flight: "4x3",
        origin: "Parauapebas",
        destiny: "Ipixuna",
        departure_time: "08:00",
        arrival_time: "08:30",
        value: 300
    },

]