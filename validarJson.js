
const joi = require('joi')

const jsonpersona = {

    nombre: joi.string().min(2).max(10).required(),
    apellido: joi.string().min(2).max(30).required(),
    edad : joi.number().integer(2).min(18).max(50),
}

const jsonvalidacionpersona = joi.object().keys(jsonpersona)
.with('nombre','apellido')

const jsonPrueba = {
nombre: 'asasas',
apellido: 'asfdsa'

}

joi.validate(jsonPrueba, jsonvalidacionpersona, (error,valor) =>{
console.log(error),
console.log(valor)

}

)