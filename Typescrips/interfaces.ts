
//// ointerfaces se le conoce mocmo firmas  ys se usa como una clase


//como se crea un interfaz 
// puedo tener varios interfaces



interface persona{
nombre : string,
apellido: string,
edad: number,
esSolero: boolean

}


interface correo{
    email?: string,
   
    
    
    }

    interface trabajo extends correo, persona{
      nombreTrabajo: string
        
        }




//const policia: persona = { apellido:'yz', edad:30, esSolero:true, nombre:'juan'}



const policia: trabajo = {
apellido:'',
edad: 1,
esSolero: false,
nombre:'',
nombreTrabajo:''
}

//castin se puede hacer de varias formas
///debemos  castear por interfaces

const valor = 1;
//as
//valor as number;
///<tipodedatos>
//
<number>valor













































