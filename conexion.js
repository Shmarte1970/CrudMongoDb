const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetodb  = mongoose.connection

objetodb.on('connected', () =>{console.log('Conexion a MongoDb Ok')})
objetodb.on('error', () =>{console.log('Error de conexion a MongoDb')})

module.exports = mongoose