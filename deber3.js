

/*usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario*/

var  json  =  {
    arreglos : {
      user : [ "david" ,  "26" ,  "1993/08/16" ,  "3108065" ] ,
    } ,
  } ;

  function  anadirPersona ( arreglo , nombre , edad , fecha , teléfono , men ) {
    arreglo. push( nombre ),  
    arreglo .push ( Edad ),  
    arreglo .push( Fecha ),  
    arreglo .push( telefono )  
   
    men(
        {
        mensaje : 'perosona agrego'
    }
    )
}


var verifica  =  json.arreglos.user.indexOf( "david" ) ;
if (verifica !== - 1 ) {
  console.log ( "Esta persona ya se encuentra agregada" ) ;
} else {

  anadirPersona ( json.arreglos.user,  'Ricardo' , '28' , '04/ 03/ 1995' , '0215288' , ( Mensaje )  => {
    consola . log (mensaje) ;
    
} )
}

function  listarPersona ( arreglo ,  men )  {
    arreglo . forEach ( ( usuario )  =>  {
      console.log ( usuario ) ;
    } ) ;
    men ( {
      mensaje : "listas persona" ,
    } ) ;
  }
  
  listarPersona (json.arreglos.user ,  ( respuestaMensaje )  =>  {
    console.log( respuestaMensaje ) ;
  } ) ;

  
function  editar( arreglo , nombre , edad , fecha ,telefono, índice , índice2 , índice3 , índice4 , men )  {

    arreglo [índice]  =  nombre
    
    arreglo [índice2]  =  edad
    
    arreglo [índice3]  =  fecha
  
    arreglo [índice4]  = telefono 
    
    men( {
      mensaje : "persona editada"
    } ) ;
  }
  
  editar(json.arreglos.user,  "xyz" , '50' , '08 / 05 / 97','050255265' , 0 , 1 , 2 , 3 , ( respuestaMensaje )  =>  {
    console.log( respuestaMensaje ) ;
  } ) ;


  function  eliminar( arreglo , nombre , edad , fecha , telefono , indice , indice2 , indice3 , indice4 , men )  {

    arreglo [ indice ]  =  nombre
    
    arreglo [ indice2 ]  =  edad
    
    arreglo [ indice3 ]  =  fecha
  
    arreglo [ indice4 ]  =  telefono
    men ( {
      mensaje : "persona eliminada" ,
      arreglo ,
    } ) ;
  }
  
  eliminar( json.arreglos.user,  "" , '' , '' , '' , 0 , 1 , 2 , 3 , ( respuestaMensaje )  =>  {
    console.log( respuestaMensaje ) ;
  } ) ;


















  