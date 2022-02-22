const express = require('express')
const router  = express.Router()


const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    movil: String,
    idusuario: String 

})

const ModeloUsuario = mongoose.model('usuario', eschemausuario)

module.exports = router


/*
router.get('/ejemplo', (req, res) => {
    res.end('Saludo de prueba')
})*/

// Ruta para agregar usuarios
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        movil: req.body.movil,
        idusuario: req.body.idusuario
    })

    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado a la BBDD-Mongo')        
        }else{
            res.send(err)
        }
    })

})

// Ruta para listar usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)        
        }else{
            res.send(err)
        }
        
    })
})