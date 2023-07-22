const express = require('express')
const database = require('../database')


const route = express()

route.post('/car', (req, res) => {
    const car = req.body
    
    database.push(car)

    return res.status(201).json(car)
})

module.exports = route