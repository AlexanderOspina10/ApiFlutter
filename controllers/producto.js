const {response} = require('express');
const producto = require('../models/producto');

Producto = require('../models/producto')

const getProducto = async(req, res) => {
    const producto =  await Producto.find(); //OBTENER TODOS LOS DATOS DE LA COLLECCION
    res.json({
        msg:producto
    })
}

// const postCliente = async(req, res) => {
//     const datos = req.query//CAPTURAR DATOS DE LA URL-POSTMAN LOCALMENTE

const postProducto = async(req, res) => {
        const datos = req.body//CAPTURAR DATOS DE LA URL-POSTMAN EN LA AWEB


    let mensaje = 'Insercción exitosa'

    try {
        const producto = new Producto(datos)
        producto.save()
        console.log(producto)
        
    } catch (error) {
        mensaje= error
        console.log(error)
    }

    res.json({
        msg:mensaje
    })
}

const putProducto = async(req, res) => {
    const {producto, kilos, precioKilos} = req.body //DESESTRUCTURAR
    let mensaje = ''
    try {
        const producto = await Producto.findOne({ producto });
        if(producto){
            const producto = await Producto.findOneAndUpdate({producto: producto},
                {producto:producto, kilos:kilos,precioKilos:precioKilos})
                mensaje = 'Actualizacion existosa'
        }else{
            mensaje = 'Producto no encontrado'
        }
        
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}

const deleteProducto = async (req, res) => { 
    const {producto} = req.body; // DESESTRUCTURAR
    let mensaje = '';

    try {
        const producto = await Producto.findOne({Producto});

        if (producto) {
            // Si el cliente existe, procede a eliminarlo
            await Producto.findOneAndDelete({producto});
            mensaje = 'Eliminación exitosa';
        } else {
            mensaje = 'Producto no encontrado';
        }
    } catch (error) {
        mensaje = error.message || 'Error al eliminar el producto';
    }

    res.json({
        msg: mensaje,
    });
};


module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}