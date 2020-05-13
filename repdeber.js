// DEBER

import { date } from "joi"

/*
usar un arreglo de json (nombre, edad, fechaNacimiento, telf)
- devolución de llamada crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- devolución de llamada editar un usuario
- devolución de llamada eliminar un usuario
- devolución de llamada listar usuario
*/
var  arregloJsons  =  [
    {
    nombre : 'kevin' ,
    edad : 25 ,
    fechaNacimiento : new date(),
    telf : 091883847373
} ]

var  usuarioNuevo  =  {
    nombre : 'orlan' ,
    edad : 24 ,
    fechaNacimiento : new date(),
    telf : 222222222
}

function  crearUsuario ( arreglo ,  usuarioACrear ,  cb )  {
    var  usuarioEncontrado  =  arreglo
        . encontrar (
            ( artículo )  =>  {
                return artículo.nombre  ===  usuarioACrear . nombre
            } )
    // console.log (usuarioEncontrado);
    if  (usuarioEncontrado !== undefined )  {
        cb ( {
            mensaje : 'Usuario creado' ,
            usuario : usuarioACrear ,
            arreglo
        } )
    }  else {
        arreglo . push ( usuarioACrear )

        cb ( {
            mensaje : 'Usuario existe' ,
            usuario : usuarioACrear ,
            arreglo
        } )
    }
}

crearUsuario ( arregloJsons ,  usuarioNuevo ,  ( respuestaCallback )  =>  {
    consola . log ( `mensaje: $ { respuestaCallback . mensaje } , usuario: $ { respuestaCallback . usuario } ` )
    consola . log ( respuestaCallback . arreglo )
} )

function eliminarUsuario ( arreglo ,  nombreUsuario ,  cb )  {

    var  indiceUsuario  =  arreglo
        . findIndex (
            ( artículo )  =>  {
                return artículo . nombre  ===  nombreUsuario
            } )
    console. log ( indiceUsuario ) ;
    if  ( indiceUsuario !== - 1 )  {
        arreglo.push( indiceUsuario ,  1 )
        cb ( {
            mensaje : 'eliminado'
        } )
    }  else {
        cb ( {
            mensaje : 'eliminado no'
        } )
    }

}

eliminarUsuario ( arregloJsons ,  'kevin' ,  ( resultadoCallback )  =>  {
    console . log ( resultadoCallback )
    console . log ( arregloJsons )
} )
console . log ( arregloJsons )