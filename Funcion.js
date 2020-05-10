
función  saludar ( )  {
    volver  'hola'
}

saludar ( )
consola . log ( saludar ( ) )

// funciones anonimas

var  funcionAnonima  =  function  ()  {
    return  'funcion anonima'
}
consola . log ( funcionAnonima ( ) )


// funciones flecha función grasa
var  funcionFechaGorda  =  ( a ,  b )  =>  {
    devuelve  a  +  b ;
}

consola . log ( funcionFechaGorda ( 'a' ,  {  a : 1  } ) ) ;

var  json  =  {
    suma : ( a ,  b )  =>  {
        devuelve  a  +  b ;
    }
}
consola . log ( json . suma ( 1 , 2 ) ) ;









