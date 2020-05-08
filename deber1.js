
var uno= [2, 4, 5, 8, 6, 9, 10];

var arregloMutado = uno
    .map(
        (item) => {
            
                return item * 2;
               
          }
    )
    console.log("-----------Arreglo---------------")
    console.log(uno);
    console.log("--------------------------")
    console.log (arregloMutado); 

   // filter => retorna arreglor dependien de la condicion

var arregloFilter = arregloMutado
    .filter(
        (item) => {


            if (item%2 === 0) {
             return item;   
            } 
            
        }
    )
    console.log("-----------Pares---------------")
console.log (arregloFilter); 

console.log ("----------------------------------------------------"); 
console.log("-----------------------------------------------------")


  
var dos= [{valor: 1}, {valor: 4}, {valor: 2}, {valor: 24}, {valor: 100}, {valor: 23}, {valor: 45}, {valor: 23}];


var vector= [];
 
///push=>Añade los elementos al Array..
for (var i = 0, max =dos.length; i < max; i += 1) {
     vector.push(dos[i].valor);
 
}
console.log("-----------Arreglo---------------")
console.log(vector);

var arregloD = vector
    .map(
        (item) => {
            
                return item + 2;
               
          }
    )
    console.log("-----------Arreglo con la suma de 2---------------")
    console.log (arregloD); 

    var arregloFilter2 = arregloD
    .filter(
        (item) => {


            if (item%2 != 0) {
             return item;   
            } 
            
        }
    )


console.log("-----------Inpares---------------")
console.log (arregloFilter2);






