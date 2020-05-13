
// tipo de datos 
const nombre:string = 'david';
const nomero:number = 1;
const Bool:boolean = true;
const objetoUsuario: object = {

    nombre: 'david',
}
//arreglos tipados
const arregloUno: Array<number> = [];
const arreglodos: Object[] = [];


//varios tipados

const nombreDos:(string | number )= 1;
const arreglo1: Array<string | number >= [];
const arreglo2:(string | number )[]= [];


let variablelet: number;
const variableConst: number = 1;

let cualvariable: any; // caulquier tipo de dato.

//tipado de las fuciones 
//variables opcionales van al final y se represnatn con ?


    function sumar(num1?:number,num2?: number): number{
 let a = 2;
 let b = 3;
 if (num1) {
    a = num1;
 }
 if(num2){

b= num2;
 }
    return a+b;
};
sumar(5,5);
sumar(5);
sumar();
console.log(sumar(5,5));
console.log(sumar(5));
console.log(sumar());


  


class Persona  {
    constructor (
         protected nombre?: String ,
         protected apellido?: String
    )  {

    }
}

const  nnuevaPersona  =  new  Persona ();

class  hijo extends Persona  {
    constructor (
          protected nombre: string ,
         protected apellido: string ,
    )  {
        super ( nombre ,  apellido ) ;
        this. apellido  =  apellido ;
    }
}

const  hijoPersona  =  new  hijo ( 'kevin' , 'jimenez' ) ;
console.log( hijoPersona ) ;





class Person {
    constructor (
         protected nombre?: String ,
         protected apellido?: String
    )  {

    }
}

class  alumno extends Person  {
    constructor (
          protected nombre?: string ,
         protected apellido?: string ,
    )  {
        super ( nombre ,  apellido ) ;
       /// this. apellido  =  apellido ;
    }


    set setNombre(nombre: string | any){
        this.nombre = nombre;
        
            }
        
            set setApellido(apellido: string | any){
                this.apellido= this.apellido;
                
                    }


    get getNombre(): String | any{
return this.nombre

    }

    get getApellido(): String | any {
        return this.nombre
        
            }
}



const  alumnoNuevo : alumno =  new alumno ();
alumnoNuevo . setNombre ( 'kevin' ) ;
alumnoNuevo . setApellido ( '' ) ;
alumnoNuevo . getApellido() ;