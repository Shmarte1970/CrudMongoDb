const express = require('express')
const app = express()


// importat conexion MongoDB
const archivoBD = require('./conexion')


// Importacion del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)



app.get('/', (req, res) => {
    res.end('Conectado al servidor backend Node.js. por 360kb')
})


// Configuracion servidor basico
app.listen(5000, function(){
    console.log('El servidor esta encendido y funcionando correctamente')
})

