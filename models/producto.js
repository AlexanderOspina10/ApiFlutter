const {Schema, model} = require('mongoose')

const ProductoSchema = ({

 producto:{
        type: String,
        //required:[true, 'El producto es necesario']
        // unique:[true, 'El nombre ingresado ya existe en el sistema'],
        // required:[true, 'El nombre de cliente es requerido']
    },

kilos: {
            type:Number,
            //required:[true, 'Los kilos son necesarios']
            // unique:true,
            // required:[true, 'El telefono es requerido'],
            //min:[10, 'El telefono debe contener minimo 10 caracteres'],
            //max:[12, 'El telefono debe contener maximo 12 caracteres']
        },
 precioKilos: {
            type:Number,
           //required:[true, 'El precio del kilo es necesario']
            // unique:true,
            // required:[true, 'El telefono es requerido'],
            //min:[10, 'El telefono debe contener minimo 10 caracteres'],
            //max:[12, 'El telefono debe contener maximo 12 caracteres']
        },
precioDolar: {
            type:Number
        }


})

module.exports = model('Producto', ProductoSchema)