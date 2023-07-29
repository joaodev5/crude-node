const express = require('express')
const database = require('../database')


const route = express()

route.get('/car/:id', (req, res) => {
    const idcarro = req.params.id
     const carroEncontrado = database.find((carro) => {
        return carro.id === Number(idcarro)
    
    })
      
       if(carroEncontrado){
            return res.status(404).json("carro nao existe")
         } 

         return res.status(200).json(carroEncontrado)
   
})



module.exports = route