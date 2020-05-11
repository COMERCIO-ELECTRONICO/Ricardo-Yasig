
/*function primereraFuncion(){

    setTimeout(
        ()=> {
            console.log('primera')
    },500
    )
    
    }
    
    function segundaFuncion(){
        console.log('2')
    }
    
    //primereraFuncion()
    //segundaFuncion()
    
    function saludar(nombre, calback) {
        console.log('saludo a ', nombre)
        calback()
    }
    
    
    function funcionCalback() {
        primereraFuncion()
        segundaFuncion()
    console.log('ya salude')
    
    }
    
    //saludar('david', funcionCalback)
    saludar('david', ()=> {
        console.log('saludaste')
    })*/

/*function saludar2(nombre){
    console.log (`ejectuo saludo a ${nombre}`)
    return nombre
}


function participacionUser(nombre, calback){
    calback(nombre)
}

participacionUser('david', saludar2)

participacionUser('david', (saludar) => {
    console.log(saludar);
})*/



/*var arreglo = ['juan', 'juan', 'juan']
var nombreNuevo = 'juan'
function anadirNombre (arreglo, nombre, indice, cb) {
    //arreglo.push(nombre);
    arreglo [indice] = nombre
    cb (
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre (arreglo, 'kevin', 2, (mensaje) => {
    console.log (mensaje);
}); 
*/


var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})

















