
//var  arregloNumero  =  [ 1 ,  2 ,  3 ,  4 ]
// console.log (arregloNumero)
// indexOf, encontrando el indice del elemento
// console.log (arregloNumero.indexOf (0))
// agregar elementos, Push
//console.log(arregloNumero.push(10))
// console.log (arregloNumero)
// acceder elementos
// console.log (arregloNumero [2])
// rebanada y empalme

// slice => dicidir el vector original;
//var  arregloSlice  =  arregloNumero.slice(0,1)
//console.log(arregloSlice);
//console.log(arregloNumero);


// splice => dicidir el vector original;
/*var  arregloSplice  =  arregloNumero.splice(0,2)
console.log(arregloSplice) ;
console.log(arregloNumero);


console.log(arregloNumero.pop())
console.log(arregloNumero)



// map => returnno arreglo, muta al arreglo o lo modifica
var arregloMutado = arreglo2
    .map(
        (item, indice, arreglo) => {
            console.log (elemento)
            if (elemento === 2) {
                return artículo + 2;
            }
            return artículo + 1;
        }
    )
console.log (arregloMutado); 

// filter => retorna arreglor dependien de la condicion

/ * var arregloFilter = arreglo2
    .filtrar(
        (item, valor, arreglo) => {
            devolver artículo <3
        }
    )
console.log (arregloFilter); * /

// find => retorn un valor
/ * var valorFind = arreglo2
    .encontrar(
        (item, indice, arreglo) => {
            artículo devuelto === 1
        }
    )
    console.log (valorFind); * /

// todos y algunos
// cada verificación si todo los valores corresponden a una condición 
// verdadero Falso
// algunos verifica si almenos uno requerido una condicion 


var  operadoresMapyFilter  =  arreglo2
    . mapa (
        ( artículo )  =>  {
            devolver el  artículo * 2 ;
        }
    ) . filtro (
        ( artículo )  =>  {
             artículo  devuelto ==  4
        }
    )
*/


var arregloReduce = [2,1,11,3,45];

var valorsuma = arregloReduce
.reduce(
    (acumul, item, indice, arreglo) =>{

        return acumul + item

}, 0
)











