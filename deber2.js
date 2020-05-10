var PALABRA='COMERCIO ELECTRONICO'

function invertir(PALABRA) {
    var x = PALABRA.length;
    var cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + PALABRA.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }
console.log('-------------------------------------------------------------')
  console.log('Palabra Invertida: '+invertir(PALABRA)+' de  ' + PALABRA);

//console.log(nombre.length);
var nombre = 'david dias yasig dias';
var TEXTO = 'Realiza fotografías de 20 megapíxeles y'
+' puede utilizar un perfil de color Dlog-M'
+ 'de 10 bits, con el que se obtiene un rango'
+ 'dinámico más amplio al registrar hasta mil millones de'
+ 'colores. Esto queda bastante por encima de los 16 millones de'
+ 'colores de los perfiles de 8 bits, pudiendo dejar más margen y'
+ 'libertad en la edición posterior del material.'
+ 'Por su parte, el Mavic 2 Zoom cuenta con'
+ 'un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.'
+ 'En este caso es capaz de realizar capturas de 12 megapíxeles,'
+ 'disponiendo un zoom automático híbrido (que combina detección de fase y contraste)'
+ 'de una función de "Superresolución" que recurre al zoom óptico para realizar nueve'
+ 'fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).'
var c=0;
var c1=0;
for (var i = 0, max =TEXTO.length; i < max; i += 1) {
    if (TEXTO[i]=== ",") {
       c++;
            
    } 
    if (TEXTO[i]=== ".") {
        c1++;
          
     } 
}
console.log('Existen '+c + ' Comas');
console.log('Existen '+c1 + ' Puntos');

console.log('-------------------------------------------------')

    
    saludoArray = TEXTO.split(' '),
    ultima      = saludoArray[saludoArray.length - 1]
    
    primera = TEXTO.split(' ')[0]    
    function MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


     primera = MaysPrimera(primera.toLowerCase())
      console.log('Primera palabra es: '+primera) 
     
      ultima = MaysPrimera(ultima.toLowerCase())
      console.log('La ultima palabra es: '+ultima)  

  

  