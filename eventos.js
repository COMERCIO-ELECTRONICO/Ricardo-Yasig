const  EventEmitter  =  require ('eventos')

class entrarALaCasa extends EventEmitter  {}

const  entrarCasa  =  new entrarALaCasa()
var  nombreEvento  =  'entrar por la puerta de adelante hola'
// evento que escucha
// EN
entrarCasa . en ( nombreEvento ,  ( nombre )  =>  {
    consola . log ( `saludar a $ { nombre } , que ingreso por la puerta de adelante` ) ;
} )

// evento que emite
// EMIT
entrarCasa . emitir ( nombreEvento ,  'david' )
