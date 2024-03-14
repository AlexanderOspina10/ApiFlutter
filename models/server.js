const express = require('express')
const cors = require('cors')//Implementar seguridad
const bodyParser = require('body-parser')//Convertir el objeto enviado del formulario
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.productoPath = '/producto' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.productoPath, require('../routes/producto'))
    }

    async conectarDB(){
        await dbConection()
    }

    middlewares(){
        this.app.use(cors()); //Indicar el uso de cors
        this.app.use(bodyParser.json())//Parsear objetos a insetar en la db
    }

}

module.exports = {Server} //Exportación de la clase