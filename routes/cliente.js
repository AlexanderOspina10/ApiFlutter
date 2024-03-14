const {Router} = require('express')

const route = Router()


const{getProducto, postCliente, putCliente, deleteCliente} = require('../controllers/cliente')//IMPORTAR EL CONTROLADOR

route.get('/', getCliente)

route.post('/', postCliente)

route.put('/', putCliente)

route.delete('/', deleteCliente)

module.exports = route 