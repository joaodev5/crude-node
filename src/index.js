const express = require('express')
const routes = require('./routes/index')
const { route } = require('./routes/creat-car')

const app = express()

app.use(express.json())

app.use(routes.creatCar)

app.use(routes.listcars)

app.use(routes.getcar)


app.listen(3000, () =>{
    console.log('servidor inicializado')
})