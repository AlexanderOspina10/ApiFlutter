const {Router} = require('express')

const route = Router()


const{getProducto, postProducto, putProducto,deleteProducto } = require('../controllers/producto')//IMPORTAR EL CONTROLADOR

route.get('/', getProducto)

route.post('/', postProducto)

route.post('/', putProducto)

route.post('/', deleteProducto)


module.exports = route 